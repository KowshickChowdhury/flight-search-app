import { useState } from "react";
import "./App.css";
import flightJson from "./components/Fights";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import FlightResultsTable from "./components/FlightResultsTable";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const filteredFlights = filterFlights(searchTerm);
    setSearchResults(filteredFlights);
  };

  console.log("searchResults", searchResults);

  const filterFlights = (searchTerm) => {
  const { departureDate } = searchTerm;

  const matchingFlights = flightJson.flightOffer.filter((flight) => {
    const isMatchingDeparture = flight.itineraries.some((itinerary) =>
      itinerary.segments.some((segment) => {
        const segmentDepartureDate = new Date(segment.departure.at);
        const searchDepartureDate = new Date(departureDate);
        return segmentDepartureDate.toDateString() === searchDepartureDate.toDateString();
      })
    );

    return isMatchingDeparture;
  });

  return matchingFlights;
  };

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />
      {searchResults && (
        <FlightResultsTable flights={searchResults} />
      )}
    </div>
  );
}

export default App;
