import Header from "../Component/Header";
import HorizontalLine from "../Component/HorizontalLine";
import MenuItems from "../Component/MenuItems";
import TopBanner from "../Component/TopBanner";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopBanner />
      <Header />
      <MenuItems />
      <HorizontalLine />
      <div className="flex flex-col justify-center items-center mt-52">
        <h1 className="text-5xl">Invalid Page</h1>
        <h1
          className="text-3xl mt-6 cursor-pointer hover:text-red-700"
          onClick={() => navigate("/")}
        >
          Click to go back to HOME
        </h1>
      </div>
    </>
  );
};

export default Error404;
