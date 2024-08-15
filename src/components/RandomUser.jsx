import { useEffect, useState } from "react";

const RandomUser = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers/user/random"
      );
      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Use useEffect to call fetchRandomUser when the component mounts
  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className="w-full h-screen bg-gray-300">
      <h1>{user?.data.name.first}</h1>
    </div>
  );
};

export default RandomUser;
