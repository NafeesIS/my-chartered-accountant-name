import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";

const Header = () => {
  return (
    <div className="pl-16 flex gap-16 my-24 justify-center items-center">
      <div className="max-w-xl">
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
            className="input w-full"
          />
          <button
            type="submit"
            className="btn text-base font-bold bg-[#0076ce] hover:bg-[#0076ce] text-white"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex gap-4">
        <img src={person1} className="logo mt-16" alt="person1" />
        <img src={person2} className="logo" alt="person2" />
        <img src={person3} className="logo mt-10" alt="person3" />
      </div>
    </div>
  );
};

export default Header;
