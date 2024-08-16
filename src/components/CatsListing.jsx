import { useEffect, useState } from "react";
import cat from "../assets/bg_cat.png";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const CatsListing = () => {
  const [catInfo, setCatInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 4;
  const navigate = useNavigate();

  const fetchCatsList = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=${limit}`
      );
      const data = await response.json();
      const newCats = data?.data?.data || [];

      if (newCats.length === 0) {
        setHasMore(false);
      } else {
        const uniqueCats = Array.from(
          new Set([...catInfo, ...newCats].map((cat) => cat.id))
        ).map((id) => [...catInfo, ...newCats].find((cat) => cat.id === id));

        setCatInfo(uniqueCats);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching cats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatsList();
  }, []);

  const LoadingCard = () => (
    <div className="bg-white h-[80vh] w-[45vh] rounded-xl text-black shadow-lg overflow-hidden animate-pulse">
      <div className="h-[28vh] w-full bg-gray-300"></div>
      <div className="p-4">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="flex flex-wrap gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-16 bg-gray-300 rounded-full"></div>
          ))}
        </div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );

  return (
    <div
      className="w-full min-h-screen relative text-white scroll-smooth"
      style={{
        backgroundImage: `url(${cat})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-10">
        <div className="flex justify-between">
          {" "}
          <div className="flex items-center">
            <Link onClick={() => navigate(-1)}>
              <GoArrowLeft size={40} className="-mt-7"/>
            </Link>
            <h1 className="text-6xl font-bold text-white mb-6">
              Cats around us
            </h1>
          </div>
          <div>
            {hasMore && !loading && (
              <button
                onClick={fetchCatsList}
                className=" relative px-2 py-2 bg-purple-500 mb-1 text-white rounded-md hover:bg-purple-600 transition-colors"
              >
                Load More
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="flex gap-8 w-max">
            {catInfo.map((cat) => (
              <div
                key={cat.id}
                className="bg-white h-[80vh] w-[45vh] rounded-xl text-black shadow-lg overflow-hidden flex-shrink-0"
              >
                <img
                  src={cat.image}
                  className="h-[28vh] w-full object-cover"
                  alt={`${cat.name} image`}
                />
                <div className="p-4">
                  <h1 className="text-2xl font-medium">{cat.name}</h1>
                  <p className="text-xs font-medium mt-2">{cat.description}</p>
                  <div className="flex justify-start mb-2 mt-4 font-medium">
                    <h1 className="italic mr-20">Origin</h1>
                    <h1>{cat.origin}</h1>
                  </div>
                  <h1 className="italic font-medium">Temperament</h1>
                  <div className="gap-2 flex flex-wrap ">
                    {cat.temperament &&
                      cat.temperament?.split(", ").map((trait, i) => (
                        <button
                          key={i}
                          className="pl-2 pr-2 pt-1 pb-1 rounded-full bg-gray-200 hover:bg-purple-400 hover:text-white cursor-pointer text-xs"
                        >
                          {trait}
                        </button>
                      ))}
                  </div>
                  <div className="flex mt-2">
                    <h1 className="italic font-medium mr-14">Life Span</h1>
                    <h1>{cat.life_span} years</h1>
                  </div>

                  <a
                    href={`https://en.wikipedia.org/wiki/${cat.name}_cat`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bottom-2 mt-5 text-blue-500 cursor-pointer">
                      Learn more
                    </div>
                  </a>
                </div>
              </div>
            ))}
            {loading && <LoadingCard />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatsListing;
