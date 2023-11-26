import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-[#fafbfc]">
      <div className=" max-w-[1536px] mx-auto">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
