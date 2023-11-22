import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-[#fafbfc] max-w-[1536px] mx-auto">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
