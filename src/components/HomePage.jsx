import { Link } from "react-router-dom";
import cat from "../assets/cat.gif";
import Funny from "../assets/Funny.gif";
import user from "../assets/user.gif";
import { MdArrowOutward } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-zinc-300">
      <div className="">
        <h1 className="text-center text-5xl font-mono font-semibold bg-black text-orange-500 p-4  ">
          Machine Coding Assignment [React.js]
        </h1>
        <div className="mt-40 flex justify-evenly rounded-xl">
          <div>
            <Link to="/random-user">
              <div className="h-[45vh] bg-red-400 w-72 rounded-xl">
                <div className="bg-white flex items-center rounded-t-xl">
                  <h1 className="p-4 text-xl font-bold  flex ">
                    Random User project
                  </h1>
                  <div>
                    <MdArrowOutward
                      className="rounded-full border p-1"
                      size={35}
                    />
                  </div>
                </div>
                <img src={user} className="p-3  " alt="" />
              </div>
            </Link>
          </div>
          <div>
            <Link to="/random-jokes">
              <div className="h-[45vh] bg-blue-400 w-72 rounded-xl">
                <div className="bg-white flex items-center rounded-t-xl">
                  <h1 className="p-4 text-xl font-bold  flex ">
                    Random Jokes project
                  </h1>
                  <div>
                    <MdArrowOutward
                      className="rounded-full border p-1"
                      size={35}
                    />
                  </div>
                </div>
                <img src={Funny} className="p-3 " alt="" />
              </div>
            </Link>
          </div>
          <div>
            <Link to="cats-listing">
              <div className="h-[45vh] bg-indigo-300 w-72 rounded-xl">
                <div className="bg-white flex items-center rounded-t-xl">
                  <h1 className="p-4 text-xl font-bold  flex ">
                    Cats Listings project
                  </h1>
                  <div>
                    <MdArrowOutward
                      className="rounded-full border p-1"
                      size={35}
                    />
                  </div>
                </div>
                <img src={cat} className= "p-3  mt-4 " alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl  mt-[105px] font-mono font-semibold bg-gray-800 text-white 500 p-4  ">
        Made by anuj846k
      </h1>
    </div>
  );
};

export default HomePage;
