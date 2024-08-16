import { GoArrowLeft } from "react-icons/go";
import tweet from "../assets/Twitter.png";
import elon from "../assets/elon.png";
import { BiDotsHorizontalRounded, BiRepost } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiShare2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonJokes from "./SkeletonJokes";

const RandomJokes = () => {
  const [joke, setJoke] = useState(null);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true);

  const fetchRandomJokes = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
      );
      const data = await response.json();
      console.log(data);
      setJoke(data);
    } catch (err) {
      console.log("Error:", err);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomTime = () => {
    const hours = getRandomInt(0, 23);
    const minutes = getRandomInt(0, 59);
    const ampm = hours >= 12 ? "pm" : "am";
    return `${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes}${ampm}`;
  };

  const generateRandomDate = () => {
    const start = new Date();
    const end = new Date(new Date().setFullYear(start.getFullYear() - 1));
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const generateRandomViews = () => {
    return `${getRandomInt(1, 100)}.${getRandomInt(0, 9)}M`;
  };

  const generateRandomMetrics = () => {
    return getRandomInt(1, 20) + "k";
  };


  if (loading) {
    return <SkeletonJokes />;
  }

  return (
    <div
      className="w-full h-screen items-center justify-center flex  text-white "
      style={{
        backgroundImage: `url(${tweet})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black w-[73vh] h-auto rounded-xl p-5 m-3 md:m-0">
        <div className="justify-between flex ">
          <div className="flex items-center">
            <GoArrowLeft
              onClick={() => navigate(-1)}
              className="cursor-pointer mr-4"
              size={20}
            />
            <h1 className="font-bold">Post</h1>
          </div>
          <div>
            <BiDotsHorizontalRounded />
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          <div className="flex">
            <img
              src={elon}
              alt="Elon musk Profil pic"
              className="rounded-full h-14 w-14"
            />
            <div className="ml-2 mt-1">
              <div className="flex">
                <h1 className=" font-bold">Elon musk</h1>
                <MdVerified className="text-blue-400" />
              </div>
              <p className="text-xs -mt-1">@elonmusk</p>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-[14px]">{joke?.data.content}</p>
            <div className="mt-3 flex items-center">
              <h1 className="text-zinc-400 text-sm">{generateRandomTime()}</h1>
              <h1 className="-mt-2 ml-1">.</h1>
              <h1 className="text-zinc-400 text-sm ml-1">
                {generateRandomDate()}
              </h1>
              <h1 className="-mt-2 ml-1">.</h1>
              <h1 className="text-sm ml-1"> {generateRandomViews()}</h1>
              <h1 className="text-zinc-400 text-sm ml-1">Views</h1>
            </div>
            <div>
              <hr className="h-[0.5px] border-none bg-zinc-400 my-2" />
              <div className="flex  justify-around p-2">
                <div className="flex items-center text-zinc-400">
                  <FaRegComment className=" mr-1" />
                  <h1 className="text-sm ">{generateRandomMetrics()}</h1>
                </div>
                <div className="flex items-center text-zinc-400">
                  <BiRepost className=" mr-1" />
                  <h1 className="text-sm ">{generateRandomMetrics()}</h1>
                </div>
                <div className="flex items-center text-zinc-400">
                  <FaRegHeart className=" mr-1" />
                  <h1 className="text-sm ">{generateRandomMetrics()}</h1>
                </div>
                <div className="flex items-center text-zinc-400">
                  <IoBookmarkOutline className=" mr-1" />
                  <h1 className="text-sm ">{generateRandomMetrics()}</h1>
                </div>
                <div className="flex items-center text-zinc-400">
                  <RiShare2Line className=" mr-1" />
                </div>
              </div>

              <hr className="h-[1px] border-none bg-zinc-400 my-2" />
              <h1 className="text-center text-[10px] text-zinc-400">
                © chai aur code
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomJokes;
