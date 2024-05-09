import React, { useState } from "react";

function SearchForm() {
  const [departureAirport, setDepartureAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);

  const handleSubmit = () => {

  }

  return (
    <>
      <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="departureAirport"
              value={departureAirport}
              onChange={(e) => setDepartureAirport(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Departure Airport..."
            />
          </div>
          <div>
            <input
              type="text"
              id="destinationAirport"
              value={destinationAirport}
              onChange={(e) => setDestinationAirport(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="passengerCount"
              className="block text-sm font-medium text-gray-700"
            >
              Passengers
            </label>
            <input
              type="number"
              id="passengerCount"
              value={passengerCount}
              onChange={(e) => setPassengerCount(parseInt(e.target.value))}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              min="1"
            />
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
};

export default SearchForm;
