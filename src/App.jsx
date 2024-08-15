import { Routes, Route } from "react-router-dom";
import RandomJokes from "./components/RandomJokes";
import RandomUser from "./components/RandomUser";
import CatsListing from "./components/CatsListing";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-user" element={<RandomUser />} />
        <Route path="/random-jokes" element={<RandomJokes />} />
        <Route path="/cats-listing" element={<CatsListing />} />
      </Routes>
    </div>
  );
};
export default App;
