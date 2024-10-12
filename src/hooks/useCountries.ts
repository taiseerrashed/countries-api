import { useQuery } from "react-query";
import axios from "axios"

export interface ICountry {
    name: { common: string;};
    capital: string[];
    region: string;
    population: number;
    area: number;
    flags?: {png: string};
};

const fetchCountries = async (searchTerm: string, region:string): Promise<ICountry[]> => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    let countries = response.data;
    
    countries = countries.filter((country: ICountry) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.capital?.some((cap: string) => cap.toLowerCase().includes(searchTerm.toLowerCase())) ||
        country.region.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (region) {
        countries = countries.filter((country: ICountry) => country.region === region);
    }
    return countries;
};
export const useCountries = (searchTerm: string, region: string) => {
    return useQuery<ICountry[], Error>(
        ["countries", searchTerm, region],
        () => fetchCountries(searchTerm, region), {
            staleTime: Infinity,
        },
    );
};


