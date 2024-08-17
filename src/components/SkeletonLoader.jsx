import leaves from "../assets/llleaves.svg";


const SkeletonLoader = () => {
    return (
      <div className="w-full h-screen items-center justify-center flex font-serif bg-black" style={{
        backgroundImage: `url(${leaves})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="h-auto w-[45vh] bg-white p-3 rounded-2xl border-[8px] border-gray-200">
          <div className="flex-row flex items-center justify-between">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="items-center justify-center flex flex-col mt-10">
            <div className="bg-gray-200 rounded-full w-28 h-28 mb-4 animate-pulse"></div>
            <div className="w-24 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div>
            <hr className="h-[1px] border-none bg-gray-200 my-2" />
            <div className="flex justify-evenly">
              <div className="flex">
                <div className="flex items-center cursor-pointer">
                  <div className="bg-gray-200 p-[3.5px] rounded-full mr-2 animate-pulse"></div>
                  <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center cursor-pointer">
                  <div className="bg-gray-200 p-[3.5px] rounded-full mr-2 animate-pulse"></div>
                  <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
            <hr className="h-[1px] border-none bg-gray-200 my-2" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col w-[50vh]">
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="w-24 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
            </div>
            <div className="flex flex-col ml-3 w-[50vh]">
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="flex items-center">
                <div className="w-6 h-3 bg-gray-200 rounded animate-pulse mr-2 -mt-2"></div>
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="w-24 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
            </div>
          </div>
          <div className="md:mt-16 mt-14">
            <div className="bg-gray-200 w-32 h-4 rounded animate-pulse text-center mb-3"></div>
            <div className="flex justify-center">
              <div className="bg-gray-200 w-14 h-14 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SkeletonLoader;
  