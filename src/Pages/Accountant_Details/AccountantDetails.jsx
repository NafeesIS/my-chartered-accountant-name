import { useLoaderData } from "react-router-dom";
import star from "../../assets/star-fill.svg";
import calendar from "../../assets/calendar-2-line.svg";
import AccountantCard from "../../components/AccountantCard";
import Navbar from "../../Shared/Navbar/Navbar";

const AccountantDetails = () => {
  const accountantDetails = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:px-16 px-4">
        <div className="lg:flex flex-none space-x-6">
          <div className=" max-w-xl mx-auto">
            <div>
              <h1 className="font-bold text-4xl mb-2">
                {accountantDetails?.name}
              </h1>
              <p className="text-xl font-normal mb-8">
                I am here to provide my {accountantDetails?.intro},all to assist
                you effectively.
              </p>
              <p className="flex space-x-1">
                <img src={star} alt="" />
                <span className="font-semibold text-xl text-[#0076ce]">
                  {accountantDetails?.rating}
                </span>{" "}
                <span className="text-xl">
                  ({accountantDetails?.reviewCount})
                </span>
              </p>
              <div className="bg-white rounded-2xl shadow-lg p-4 my-8">
                <div className="flex justify-between mb-6">
                  <p className="text-xl">{accountantDetails.taskComplexity}</p>
                  <p className="font-bold text-2xl">
                    {accountantDetails.price}
                  </p>
                </div>
                <div className="flex mb-4">
                  <img src={calendar} alt="" />
                  <p className="text-xl ml-2">
                    {accountantDetails.deliveryTime}
                  </p>
                </div>
                <div className="flex justify-between">
                  <button className="btn bg-[#0076ce] hover:bg-[#0076ce] text-white text-base font-bold h-6 w-1/2 mr-1">
                    Request Proposal
                  </button>
                  <button className="btn btn-outline hover:bg-[#0076ce] text-[#0076ce] text-base font-bold h-6 w-1/2">
                    Chat with me
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-4 my-8">
                <h3 className="text-4xl font-bold mb-6">What people say?</h3>
                <p>{accountantDetails?.testimonial?.text}</p>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <img
              src={accountantDetails?.image}
              className="rounded-xl mb-8 lg:min-h-[412px] min-h-0"
              alt=""
            />
            <h1 className="font-bold text-4xl">
              About {accountantDetails?.name}
            </h1>
            <div className="flex justify-between my-5">
              <div>
                <p className="text-[#999999] font-bold text-base">FROM</p>
                <p className="text-xl font-normal">
                  {accountantDetails?.about?.from}
                </p>
              </div>
              <div>
                <p className="text-[#999999] font-bold text-base">
                  PARTNER SINCE
                </p>
                <p className="text-xl font-normal">
                  {accountantDetails?.about?.partnerSince}
                </p>
              </div>
              <div>
                <p className="text-[#999999] font-bold text-base">
                  AVERAGE RESPONSE TIME
                </p>
                <p className="text-xl font-normal">
                  {accountantDetails?.about?.averageResponseTime}
                </p>
              </div>
            </div>
            <div>
              <h6 className="font-bold text-base text-[#999999]">About</h6>
              <p className="text-xl font-normal">
                I am a {accountantDetails?.about?.description} of accounting and
                finance, financial statements, Bookkeeping in affordable price.
              </p>
            </div>
            <div className="flex justify-between my-8">
              <div>
                <h6 className="text-[#999999] font-bold text-base">
                  SERVICES I OFFER
                </h6>
                <ul className="list-disc">
                  {accountantDetails?.about?.services?.map((service, index) => (
                    <li className="ml-7" key={index}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="text-[#999999] font-bold text-base">WHY ME?</h6>
                <ul className="list-disc">
                  {accountantDetails?.about?.benefits?.map((benefit, index) => (
                    <li className="ml-7" key={index}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-32">
          <h1 className="font-bold text-4xl mb-8">Recommended for you</h1>
          <div className="mx-auto flex">
            <AccountantCard></AccountantCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountantDetails;
