import wavebg from "../assets/wavebg.svg";

const JoinUs = () => {
  return (
    <div>
      <div
        className=" mx-auto max-w-full"
        style={{
          background: `url(${wavebg})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
        }}
      >
        <div className="text-center pb-20 lg:px-16 px-0">
          <h1 className="font-bold text-6xl pb-4">
            Want to
            <span
              className="text-6xl px-2"
              style={{
                background: "linear-gradient(to right, #0076ce, #9400d3)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Join
            </span>
            Us?
          </h1>
          <p className="text-2xl">
            To remain with us, it is essential that you diligently follow the
            steps provided
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center items-center mx-auto w-full lg:px-16 px-4 md:px-2">
          <div className="card w-96 bg-base-100 shadow-lg flex flex-col items-center justify-center justify-self-center self-center">
            <span className="absolute top-[-10px] left-[-5px] bg-gradient-to-r from-[#0076ce] to-[#9400d3] text-white py-1 px-3 rounded-lg font-bold text-2xl">
              1<sup>st</sup>
            </span>
            <div className="card-body text-center">
              <div className="px-10">
                <h2 className="text-xl font-bold">Commencement of business</h2>
                <p className="text-base font-normal">
                  Invested shareholders must confirm payment and office address
                </p>
              </div>
              <div className="flex text-start  justify-between bg-[#f4f4f3] rounded-lg p-2 max-h-28 h-24 px-4">
                <div className="max-w-[95px]">
                  <h5 className="font-bold text-lg text-[#0076ce]">Due Date</h5>
                  <p className="font-normal text-base">Within 180 days</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg text-[#ff6666]">
                    Penalty Fees
                  </h5>
                  <p>
                    <span className="font-bold">₹50,000</span> for the company
                  </p>
                  <p>
                    <span className="font-bold">₹1,000</span>/day for directors
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-lg flex flex-col items-center justify-center justify-self-center self-center">
            <span className="absolute top-[-10px] left-[-5px] bg-gradient-to-r from-[#0076ce] to-[#9400d3] text-white py-1 px-3 rounded-lg font-bold text-2xl">
              2<sup>nd</sup>
            </span>
            <div className="card-body text-center">
              <div className="px-10">
                <h2 className="text-xl font-bold">Auditor Appointment</h2>
                <p className="text-base font-normal">
                  Company informs new auditor and submits ADT.1 form to ROC.
                </p>
              </div>
              <div className="flex text-start justify-between bg-[#f4f4f3] rounded-lg p-2 max-h-28 h-24 px-4">
                <div className="max-w-[95px]">
                  <h5 className="font-bold text-lg text-[#0076ce]">Due Date</h5>
                  <p className="font-normal text-base">Within 30 days</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg text-[#ff6666]">
                    Penalty Fees
                  </h5>
                  <p>
                    <span className="font-bold">₹300</span> per month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-lg flex flex-col items-center justify-center justify-self-center self-center">
            <span className="absolute top-[-10px] left-[-5px] bg-gradient-to-r from-[#0076ce] to-[#9400d3] text-white py-1 px-3 rounded-lg font-bold text-2xl">
              3<sup>rd</sup>
            </span>
            <div className="card-body text-center">
              <div className="px-10">
                <h2 className="text-xl font-bold">DIN eKYC</h2>
                <p className="text-base font-normal">
                  Directors share personal information for identification &
                  verification
                </p>
              </div>
              <div className="flex text-start justify-between bg-[#f4f4f3] rounded-lg p-2 max-h-28 h-24 px-4">
                <div className="max-w-[100px]">
                  <h5 className="font-bold text-lg text-[#0076ce]">Due Date</h5>
                  <p className="font-normal text-base">Every Year</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg text-[#ff6666]">
                    Penalty Fees
                  </h5>
                  <p>
                    <span className="font-bold">₹5,000</span> for the company
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-lg flex flex-col items-center justify-center justify-self-center self-center">
            <span className="absolute top-[-10px] left-[-5px] bg-gradient-to-r from-[#0076ce] to-[#9400d3] text-white py-1 px-3 rounded-lg font-bold text-2xl">
              4<sup>th</sup>
            </span>
            <div className="card-body text-center">
              <div className="px-6">
                <h2 className="text-xl font-bold">DPT-3</h2>
                <p className="text-base font-normal">
                  Companies report money taken from people to ROC; auditors
                  confirm details.
                </p>
              </div>
              <div className="flex text-start justify-between bg-[#f4f4f3] rounded-lg p-2 max-h-28 h-24 px-4">
                <div className="max-w-[95px]">
                  <h5 className="font-bold text-lg text-[#0076ce]">Due Date</h5>
                  <p className="font-normal text-base">Within 30 days</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg text-[#ff6666]">
                    Penalty Fees
                  </h5>
                  <p>
                    <span className="font-bold">₹300</span> per month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-lg flex flex-col items-center justify-center justify-self-center self-center">
            <span className="absolute top-[-10px] left-[-5px] bg-gradient-to-r from-[#0076ce] to-[#9400d3] text-white py-1 px-3 rounded-lg font-bold text-2xl">
              5<sup>th</sup>
            </span>
            <div className="card-body text-center">
              <div className="px-10">
                <h2 className="text-xl font-bold">MCA Form AOC-4</h2>
                <p className="text-base font-normal">
                  It's like an official report card for a company's documents
                </p>
              </div>
              <div className="flex gap-6 text-start justify-between bg-[#f4f4f3] rounded-lg p-2 max-h-28 h-24 px-4">
                <div className="max-w-[100px]">
                  <h5 className="font-bold text-lg text-[#0076ce]">Due Date</h5>
                  <p className="font-normal text-base">
                    On or Before 30th November{" "}
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-lg text-[#ff6666]">
                    Penalty Fees
                  </h5>
                  <p>
                    <span className="font-bold">₹200</span> per day
                  </p>
                  <p>(No upper limit)*</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-lg flex flex-col items-center justify-center justify-self-center self-center">
            <span className="absolute top-[-10px] left-[-5px] bg-gradient-to-r from-[#0076ce] to-[#9400d3] text-white py-1 px-3 rounded-lg font-bold text-2xl">
              6<sup>th</sup>
            </span>
            <div className="card-body text-center">
              <div className="px-6">
                <h2 className="text-xl font-bold">MCA Form MGT-7</h2>
                <p className="text-base font-normal">
                  Companies must annually report activities and finances to the
                  registrar.
                </p>
              </div>
              <div className="flex gap-6 text-start justify-between bg-[#f4f4f3] rounded-lg p-2 max-h-28 h-24 px-4">
                <div className="max-w-[100px]">
                  <h5 className="font-bold text-lg text-[#0076ce]">Due Date</h5>
                  <p className="font-normal text-base">
                    On or Before 31st December
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-lg text-[#ff6666]">
                    Penalty Fees
                  </h5>
                  <p>
                    <span className="font-bold">₹200</span> per day
                  </p>
                  <p>(No upper limit)*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="lg:px-16 px-4 mt-8 text-base">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
          <span className="font-bold"> every day</span> until you file the form
          . There is no maximum penalty amount. So, if you don't file the form
          for a year, you will owe ₹73,000 per form
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
