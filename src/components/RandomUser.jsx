import { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoReload } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import chai from "../assets/chai.png";
import { Link, useNavigate } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";


const RandomUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchRandomUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers/user/random"
      );
      const data = await response.json();
      const userData = data?.data;
      console.log("This is the user data", userData);
      setUser(userData);
    } catch (error) {
      console.error("Error:", error);
    }finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRandomUser();
  }, []);

  const openMap = () => {
    if (user?.location?.coordinates) {
      const { latitude, longitude } = user.location.coordinates;

      if (
        !isNaN(latitude) &&
        latitude >= -90 &&
        latitude <= 90 &&
        !isNaN(longitude) &&
        longitude >= -180 &&
        longitude <= 180
      ) {
        const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(mapUrl, "_blank");
      } else {
        console.error("Invalid coordinates:", latitude, longitude);
      }
    } else {
      console.error("Coordinates not available.");
    }
  };

  const handleCall=()=>{
    if(user?.phone){
      const phoneUrl=`tel:${user.phone}`;
      window.open(phoneUrl, "_blank");
    }
  }

  if (loading) {
    return <SkeletonLoader />;
  }
  
  return (
    <div className="w-full h-screen bg-gray-300 items-center justify-center flex font-serif">
      <div className="h-auto   w-[45vh] bg-[#b6b3f3] p-3 rounded-2xl border-[8px] border-white">
        <div className="flex-row flex  items-center justify-between">
          <Link onClick={()=>navigate(-1)}>
            <GoArrowLeft size={30} />
          </Link>
          <h1 className="text-lg font-medium ">Profile Overview</h1>
          <IoReload
            className="font-bold cursor-pointer"
            size={20}
            onClick={fetchRandomUser}
          />
        </div>
        <div className="items-center justify-center flex flex-col mt-10">
          <button className="bg-black text-white text-xs ml-40 pl-2 pr-2 p-1 -mb-4 border-none rounded-full cursor-none">
            {user?.name.title}
          </button>
          <img
            src={user?.picture.medium}
            alt=""
            className="rounded-full  shadow-xl   h-28 w-28 mb-4"
          />
          <h1 className="text-xl font-semibold">
            {user?.name.first} {user?.name.last}
          </h1>
          <h1 className="text-sm">{user?.login.username}</h1>
        </div>
        <div>
          <hr className="h-[1px] border-none bg-gray-300 my-2" />

          <div className="flex justify-evenly">
            <div className="flex">
              <div className="flex items-center cursor-pointer">
                <div
                  className="bg-black p-[3.5px] rounded-full mr-2"
                  onClick={openMap}
                >
                  <SlLocationPin className=" text-white" size={17} />
                </div>
                <h1 className="text-sm font-medium" onClick={openMap}>Location</h1>
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center cursor-pointer">
                <div className="bg-black p-[3.5px] rounded-full mr-2 " onClick={handleCall}>
                  <MdCall className=" text-white" size={17} />
                </div>
                <h1 className="text-sm font-medium" onClick={handleCall}>Call me</h1>
              </div>
            </div>
          </div>

          <hr className="h-[1px] border-none bg-gray-300 my-2" />
        </div>
        <div className=" flex justify-between ">
          <div className="flex flex-col w-[50vh] ">
            <h1 className="text-xs">City</h1>
            <h1 className="text-lg font-medium mb-2">{user?.location.city}</h1>
            <h1 className="text-xs">Date of birth</h1>
            <h1 className="text-lg font-medium mb-2">
              {new Date(user?.dob.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
              })}
              , {new Date(user?.dob.date).getFullYear()}
            </h1>
            <h1 className="text-xs">Time Zone</h1>
            <h1 className="text-lg font-medium mb-2">
              {user?.location.timezone.offset} (
              {user?.location.timezone.description})
            </h1>
          </div>

          <div className="flex flex-col ml-3 w-[50vh] ">
            <h1 className="text-xs">Nationality</h1>
            <div className="flex items-center">
              <img
                src={`https://flagcdn.com/16x12/${user?.nat.toLowerCase()}.png`}
                alt="Flag"
                className="w-6 h-3 mr-2 -mt-2"
              />
              <h1 className="text-lg font-medium mb-2">{user?.nat}</h1>
            </div>
            <h1 className="text-xs">Phone No.</h1>
            <h1 className="text-lg font-medium mb-2">{user?.phone}</h1>
            <h1 className="text-xs">Registered Since</h1>

            <h1 className="text-lg font-medium mb-2 mr-2">
              {new Date(user?.registered.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
              })}
              , {new Date(user?.registered.date).getFullYear()}
            </h1>
          </div>
        </div>
        <div className="md:mt-16 mt-14">
          <h1 className=" text-white text-xs md:mt-10 mb-3 md:mb-0 text-center">
            © chai aur code
          </h1>
          <a href="https://chaicode.com/" target="_blank">
            <img
              src={chai}
              className="md:h-14  md:w-14 h-12 w-12 rounded-xl md:ml-60 ml-52 -mt-16"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomUser;
