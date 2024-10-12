import axios from "axios";
import { useQuery } from "react-query";
import { ICountry } from "./useCountries";

const fetchRegions = async (): Promise<string[]> => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countries = response.data;   
    const regions = countries.map((country: ICountry) => country.region);
    return regions;
};
export const useRegions = () => {
    return useQuery<string[], Error>(
        "regions", fetchRegions, 
        {
            staleTime: 30000,
        }
    );
};