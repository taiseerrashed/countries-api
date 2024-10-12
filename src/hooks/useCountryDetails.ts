import axios from "axios";
import { useQuery } from "react-query";

const fetchCountryDetails = async (name: string) => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return response.data[0];
};
export const useCountryDetails = (name: string) => {
    return useQuery(
        ["countryDetails", name],
        () => fetchCountryDetails(name),
        {
            staleTime: 30000,
        },
    );
};
