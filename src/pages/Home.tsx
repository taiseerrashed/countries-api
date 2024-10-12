import { useState } from "react";
import { ICountry, useCountries } from "../hooks/useCountries";
import Search from "../components/Search";
import CountryCard from "../components/CountryCard";
import RegionFilter from "../components/RegionFilter";
import SortOptions from "../components/SortOptions";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import Loader from "../components/Loader";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [region, setRegion] = useState("");
    const [sortOption, setSortOption] = useState("");
    const {data: countries, isLoading, isError, error} = useCountries(searchTerm, region);

    const sortedCountries = () => {
        if (countries) {
            const sorted = [...countries];
            if (sortOption === "population") {
              sorted.sort((a, b) => b.population - a.population);
            } else if (sortOption === "area") {
              sorted.sort((a, b) => b.area - a.area);
            } else if (sortOption === "name") {
              sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
            }  
            return sorted;
        } else return [];
    };
    
    const navigate = useNavigate();

  return (
    <div className="p-4 w-full sm:w-[80%] mx-auto">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="flex flex-col gap-2 md:flex-row justify-between items-center md:mt-4">
            <ThemeToggle />
            <RegionFilter region={region} setRegion={setRegion} />
            <SortOptions sortOption={sortOption} setSortOption={setSortOption}/>
            <button className="bg-red-500 dark:bg-red-700 text-white font-medium p-2 rounded-md" onClick={()=> navigate("/favorites")}>Favorite Countries</button>
        </div>

        {isLoading && <Loader />}

        {isError && <p>Error fetching countries: {error.message}</p>}

        {!isLoading && !isError && countries && countries.length === 0 && (
            <p>No countries found for the search term "{searchTerm}".</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCountries().map((country: ICountry) => (
                <CountryCard key={country.name.common} country={country} />
            ))}
        </div>
    </div>
  );
};

export default Home;
