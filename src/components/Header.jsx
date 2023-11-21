import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import gradientbg from "../assets/gradientbg.svg";
import conicbg from "../assets/conicbg.svg";
import Navbar from "../Shared/Navbar/navbar";

const Header = () => {
  return (
    <div
      style={{
        background: `url(${gradientbg})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // height: "100vh",
      }}
    >
      <Navbar></Navbar>
      <div
        className="px-0 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-36 justify-center items-center"
        style={{
          background: `url(${conicbg})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
        }}
      >
        <div className="lg:max-w-xl max-w-full px-2 lg:px-0">
          <div className="pb-12">
            <h1 className="font-bold text-6xl pb-4">
              Find{" "}
              <span
                className="text-6xl inline-block"
                style={{
                  background: "linear-gradient(to right, #0076ce, #9400d3)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Partners
              </span>{" "}
              (CAs) available online
            </h1>
            <p className="text-[#616161] text-xl font-normal">
              <span className="font-bold">CONNECT</span> with us where your
              services are listed and visible to a myriad of businesses seeking
              CA’s for compliance support
            </p>
          </div>
          <form className="w-full flex justify-between border border-[#BFBFBF] rounded-xl">
            <input
              type="text"
              placeholder="Search by name"
              className="border-0 w-full placeholder:px-4 rounded-xl"
            />
            <button
              type="submit"
              className="btn text-base font-bold bg-[#0076ce] hover:bg-[#0076ce] text-white w-32 h-16 rounded-xl"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex gap-4 max-w-full px-4 pr-12 md:pr-4 lg:pr-0 lg:px-0">
          <img src={person1} className="logo mt-16 w-1/3" alt="person1" />
          <img src={person2} className="logo mb-10 w-1/3" alt="person2" />
          <img src={person3} className="logo mt-10 w-1/3" alt="person3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
