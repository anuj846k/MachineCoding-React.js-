import { GoArrowLeft } from "react-icons/go";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import tweet from "../assets/Twitter.png";  

const SkeletonJokes = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen items-center justify-center flex text-white bg-gray-900" style={{
        backgroundImage: `url(${tweet})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className=" bg-black w-[73vh] h-auto rounded-xl p-5 m-3 md:m-0">
        <div className="justify-between flex">
          <div className="flex items-center">
            <GoArrowLeft
              onClick={() => navigate(-1)}
              className="cursor-pointer mr-4"
              size={20}
            />
            <div className="h-6 w-16 bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div>
            <BiDotsHorizontalRounded />
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          <div className="flex">
            <div className="rounded-full h-14 w-14 bg-gray-700 animate-pulse"></div>
            <div className="ml-2 mt-1">
              <div className="h-5 w-24 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-700 rounded animate-pulse mt-1"></div>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse mt-2"></div>
            <div className="h-4 w-1/2 bg-gray-700 rounded animate-pulse mt-2"></div>
            
            <div className="mt-3 flex items-center">
              <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-gray-700 rounded animate-pulse ml-2"></div>
              <div className="h-4 w-16 bg-gray-700 rounded animate-pulse ml-2"></div>
            </div>
            
            <hr className="h-[0.5px] border-none bg-gray-700 my-4" />
            
            <div className="flex justify-around">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-5 w-5 bg-gray-700 rounded-full animate-pulse mr-1"></div>
                  <div className="h-4 w-8 bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>

            <hr className="h-[1px] border-none bg-gray-700 my-4" />
            <div className="h-3 w-24 bg-gray-700 rounded animate-pulse mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonJokes;