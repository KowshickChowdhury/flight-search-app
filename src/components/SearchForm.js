import React, { useState } from "react";

function SearchForm() {
  const [departureAirport, setDepartureAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengerTypes, setPassengerTypes] = useState([
    { type: "ADT", count: 1 },
  ]);
  const passengerOptions = ["ADT", "CHILD", "KIDS"];

  const handleSubmit = () => {

  };

  const handlePassengerTypeChange = (index, value) => {
    const updatePassengerTypes = [...passengerTypes];
    updatePassengerTypes[index].type = value;
    setPassengerTypes(updatePassengerTypes);
  };

  const handlePassengerCountChange = (index, value) => {
    const updatePassengerCounts = [...passengerTypes];
    updatePassengerCounts[index].count = value;
    setPassengerTypes(updatePassengerCounts);
  };

  console.log("first", passengerTypes);

  return (
    <>
      <form className="max-w-5xl mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="flex gap-4 justify-between items-center">
          <div>
            <input
              type="text"
              id="departureAirport"
              value={departureAirport}
              onChange={(e) => setDepartureAirport(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded border p-2"
              placeholder="Departure Airport..."
            />
          </div>
          <div>
            <input
              type="text"
              id="destinationAirport"
              value={destinationAirport}
              onChange={(e) => setDestinationAirport(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded p-2 border"
              placeholder="Destination Airport"
            />
          </div>
          <div>
            <label
              htmlFor="departureDate"
              className="block text-sm font-medium text-gray-700"
            >
              Departure Date
            </label>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded p-2 border"
            />
          </div>
          <div>
            <label
              htmlFor="returnDate"
              className="block text-sm font-medium text-gray-700"
            >
              Return Date
            </label>
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded p-2 border"
            />
          </div>
          <div>
            {passengerTypes.map((passengerType, index) => (
              <div key={index} className="flex gap-2 items-center">
                <select
                className="border rounded p-2"
                  value={passengerType.type}
                  onChange={(e) =>
                    handlePassengerTypeChange(index, e.target.value)
                  }
                >
                  {passengerOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <input
                className="border rounded p-2 w-20"
                  type="number"
                  value={passengerType.count}
                  onChange={(e) =>
                    handlePassengerCountChange(index, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Search Flights
        </button>
      </form>
    </>
  );
}

export default SearchForm;
