import hat from "../assets/hat.svg";
import enquire from "../assets/enquire.svg";
import search from "../assets/search.svg";
import report from "../assets/report.svg";
import teacher from "../assets/Teacher.svg";
import student from "../assets/Student.svg";

const Platform = () => {
  return (
    <div className="lg:px-16 px-4 my-32 lg:flex flex-none max-w-[1536px]">
      <div className="max-w-xl mx-auto lg:mb-0 mb-10">
        <h1 className="text-6xl font-bold mb-3">
          <span
            className="mr-3"
            style={{
              background: "linear-gradient(to right, #0076ce, #9400d3)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            All-in-One
          </span>
          platform that Makes Easier
        </h1>
        <p className="text-2xl max-w-lg pr-8">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
        <div className="grid grid-cols-2 gap-2 lg:gap-16 mt-8 max-w-screen-sm">
          <div className="flex max-w-xs text-xl items-start">
            <img
              src={search}
              className="logo w-10 lg:w-auto lg:mr-4 mr-1"
              alt="search"
            />
            <p className="lg:pr-1 p-0">
              <span className="font-bold">SEARCH</span> for vital company
              information
            </p>
          </div>
          <div className="flex max-w-xs text-xl items-start">
            <img
              src={enquire}
              className="logo w-10 lg:w-auto lg:mr-4 mr-1"
              alt="search"
            />
            <p className="lg:pr-1 p-0">
              <span className="font-bold">CONNECT</span> with the resources to
              meet your business needs
            </p>
          </div>
          <div className="flex max-w-xs text-xl items-start">
            <img
              src={report}
              className="logo w-10 lg:w-auto lg:mr-4 mr-1"
              alt="search"
            />
            <p className="lg:pr-1 p-0">
              <span className="font-bold">ACADEMY </span>to give you the skills
              for success in your career
            </p>
          </div>
          <div className="flex max-w-xs text-xl items-start">
            <img
              src={hat}
              className="logo w-10 lg:w-auto lg:mr-4 mr-1"
              alt="search"
            />
            <p className="lg:pr-1 p-0">
              <span className="font-bold">RESEARCH</span> and generate reports
              that drive growth
            </p>
          </div>
        </div>
      </div>
      <div className="mx-0 md:mx-20 lg:mx-2">
        <div className="flex justify-end items-center">
          <div className="max-w-xs">
            <div className="space-y-4 flex flex-col justify-end items-end w-full">
              <p>
                <span className="bg-[#efd9f7] rounded-tl-lg rounded-tr-lg rounded-bl-lg text-sm p-2">
                  Hey, check out loreumipsum services.
                </span>
              </p>
              <p>
                <span className="bg-[#efd9f7] rounded-tl-lg rounded-tr-lg rounded-bl-lg text-sm p-2">
                  I learned from their videos, got my first job.
                </span>
              </p>
              <p>
                <span className="bg-[#efd9f7] rounded-tl-lg rounded-tr-lg rounded-bl-lg text-sm p-2">
                  You won't be disappointed with their services.
                </span>
              </p>
            </div>
          </div>
          <img src={student} className="logo lg:w-auto w-28" alt="search" />
        </div>
        <div>
          <div className="mt-9 lg:mr-56 mr-20 space-y-4 flex flex-col lg:justify-end lg:items-end justify-start items-start pl-8 lg:mt-[-50px] mb-3 lg:mb-0">
            <p>
              <span className="bg-[#ddf3ff] rounded-tl-lg rounded-tr-lg rounded-bl-lg text-sm p-2">
                I got a perfect analysis report from them too
              </span>
            </p>
            <p>
              <span className="bg-[#ddf3ff] rounded-tl-lg rounded-tr-lg rounded-bl-lg text-sm p-2">
                Oh, that's great.
              </span>
            </p>
          </div>
          <img
            src={teacher}
            className="logo lg:w-auto lg:mt-[-20px] w-28 mt-0"
            alt="search"
          />
        </div>
      </div>
    </div>
  );
};

export default Platform;
