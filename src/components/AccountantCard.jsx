import { useState, useEffect } from "react";
import star from "../assets/star-fill.svg";
import { Link } from "react-router-dom";
const AccountantCard = () => {
  const [accountants, setAccountants] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-chartered-accountant-app-server.vercel.app/accountant_details"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setAccountants(result.slice(-3));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-4 mx-auto justify-self-center self-center">
      {accountants.map((accountant) => (
        <div key={accountant._id}>
          <div className="card card-compact w-72 lg:w-96 h-full bg-base-100 shadow-xl">
            <figure>
              <img src={accountant.image} alt="accountant" />
            </figure>
            <div className="flex justify-between text-xl font-bold pt-2 px-4">
              <p className="">{accountant.name}</p>
              <p>{accountant.price}</p>
            </div>
            <div className="card-body">
              <p className="flex space-x-1">
                <img src={star} alt="" />
                <span className="font-semibold text-xl text-[#0076ce]">
                  {accountant?.rating}
                </span>
                <span className="text-xl">({accountant?.reviewCount})</span>
              </p>
              <p>{accountant.intro}</p>
              <button></button>
              <Link
                className="btn bg-[#0076ce] hover:bg-[#0076ce] text-white text-base font-bold h-6 w-full mt-7"
                to={`/accountant_details/${accountant._id}`}
              >
                <div>View services</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountantCard;
