import { useParams } from "react-router-dom"
import { useCountryDetails } from "../hooks/useCountryDetails"
import Loader from "../components/Loader";

interface ICurrency {
    name: string;
    symbol: string;
}

const CountryDetails = () => {
    const {name} = useParams()
    const { data: country, isLoading, isError, error} = useCountryDetails(name!);

    if (isLoading) return <Loader />
    if (isError) return <p>{(error as Error).message}</p>

  return (
    <div className="p-4 w-full sm:w-3/4 lg:w-1/2 mx-auto my-10 text-center">
        <h2 className="text-3xl font-bold mb-4">{country?.name.common}</h2>
        <div className="border rounded-lg p-4 flex flex-col sm:flex-row justify-around gap-3 mx-auto">
            <img src={country.flags?.png} alt={`${country.name.common} flag`} className="w-1/4 mb-4" />
            <div className="text-left space-y-2">
                <p><strong>Population:</strong> {country?.population}</p>
                <p><strong>Languages:</strong> {Object.values(country?.languages).join(", ")}</p>
                <p><strong>Currencies:</strong> {Object.values(country?.currencies).map((currency) => `${(currency as ICurrency).name} (${(currency as ICurrency).symbol})`)}</p>
                <p><strong>Borders:</strong> {country?.borders?.join(", ")|| "No Borders"}</p>
            </div>
        </div>
    </div>
  );
};

export default CountryDetails;
