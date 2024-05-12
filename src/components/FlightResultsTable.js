import React from "react";

function FlightResultsTable({ flights }) {
  return (
    <div className="max-w-[71rem] mx-auto mt-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Flight
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Aircraft
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Class
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fare
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Route
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Departure
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Arrival
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Duration
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {flights.map((flight, index) => (
            <tr
              key={index}
              className={index % 2 !== 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-4 py-2 text-gray-500">
                {flight.itineraries[0].segments[0].carrierCode}{" "}
                {flight.itineraries[0].segments[0].flightNumber}
              </td>
              <td className="px-4 py-2 text-gray-500">
                {flight.itineraries[0].segments[0].aircraft}
              </td>
              <td className="px-4 py-2 text-gray-500">{flight.class[0]}</td>
              <td className="px-4 py-2 text-gray-500">{flight.price}</td>
              <td className="px-4 py-2 text-gray-500">{`${flight.itineraries[0].segments[0].departure.iataCode} - ${flight.itineraries[0].segments[1].arrival.iataCode}`}</td>
              <td className="px-4 py-2 text-gray-500">
                {new Date(
                  flight.itineraries[0].segments[0].departure.at
                ).toLocaleString()}
              </td>
              <td className="px-4 py-2 text-gray-500">
                {new Date(
                  flight.itineraries[0].segments[1].arrival.at
                ).toLocaleString()}
              </td>
              <td className="px-4 py-2 text-gray-500">
                {flight.itineraries[0].duration}
              </td>
              <td className="px-4 py-2 text-gray-500 text-center">
                <div>{flight.price}</div>
                <button className="text-sm px-4 py-1 bg-blue-800 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 font-medium drop-shadow-md">Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightResultsTable;
