import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import conicbg from "../assets/conicbg.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Header = () => {
  const [input, setInput] = useState("");
  const [accountants, setAccountants] = useState([]);
  console.log(accountants);
  useEffect(() => {
    if (input === "") {
      return;
    }
    fetch(
      `https://my-chartered-accountant-app-server.vercel.app/accountant_by_name?name=${input}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setAccountants(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [input]);

  return (
    <div
      style={{
        background: `url('https://svgshare.com/i/1007.svg')`,
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
          <div className="relative">
            <form className="w-full flex justify-between border border-[#BFBFBF] rounded-xl">
              <input
                type="search"
                placeholder="Search by name"
                className="border-0 w-full placeholder:px-2 rounded-xl px-4"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="btn text-base font-bold bg-[#0076ce] hover:bg-[#0076ce] text-white w-32 h-16 rounded-xl"
              >
                Search
              </button>
            </form>
            {input.length > 0 && (
              <div className="absolute w-full">
                {accountants.map((accountant) => (
                  <Link
                    to={`/accountant_details/${accountant._id}`}
                    key={accountant._id}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="bg-white rounded-xl p-1 my-1 text-xl w-full">
                      {accountant.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-4 max-w-full px-4 mt-12 lg:mt-0 pr-12 md:pr-4 lg:pr-0 lg:px-0">
          <img src={person1} className="logo mt-16 w-1/3" alt="person1" />
          <img src={person2} className="logo mb-10 w-1/3" alt="person2" />
          <img src={person3} className="logo mt-10 w-1/3" alt="person3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
