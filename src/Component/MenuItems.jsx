import { useNavigate } from "react-router-dom";
const MenuItems = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="font-semibold text-xl justify-center p-5 gap-12 hidden md:flex">
        <h1 onClick={() => navigate("/")} className="cursor-pointer hover:text-red-600">SHOP</h1>
        <h1>SKILLS</h1>
        <h1>STORIES</h1>
        <h1>ABOUT</h1>
        <h1>CONTACT US</h1>
      </div>
    </>
  );
};

export default MenuItems;
