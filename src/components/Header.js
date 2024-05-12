import React, { useState } from "react";

function Header() {
  const [selectedOption, setSelectedOption] = useState('oneWay')

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="shadow py-4">
        <h2 className="font-bold drop-shadow-md mx-8 md:mx-28">Fight Search</h2>
      </div>
      <div className="flex justify-center mt-10">
        <button className={`border rounded-l px-5 py-1 border-blue-700 text-xs font-medium ${selectedOption === "roundTrip" ? "bg-blue-700 text-white" : '' } `} onClick={() => handleOptionChange("roundTrip")}>Round Trip</button>
        <button className={`border px-5 py-1 border-blue-700 text-xs font-medium ${selectedOption === "oneWay" ? "bg-blue-700 text-white" : '' } `} onClick={() => handleOptionChange("oneWay")}>One Way</button>
        <button className={`border rounded-r px-5 py-1 border-blue-700 text-xs font-medium ${selectedOption === "multiCity" ? "bg-blue-700 text-white" : '' } `} onClick={() => handleOptionChange("multiCity")}>Multi City</button>
      </div>
    </>
  );
}

export default Header;
