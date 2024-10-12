import { Link } from "react-router-dom"
import { ICountry } from "../hooks/useCountries";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../store/store";
// import { addFavorite, removeFavorite } from "../store/slices/favoritesSlice";
import { useFavoriteStore } from "../store/useFavoritesStore";

interface ICountryProps {
    country: ICountry;
}

const CountryCard = ({country}: ICountryProps) => {
    // const {favoriteCountries} = useSelector((state:RootState) => state.favorites);
    // const dispatch = useDispatch<AppDispatch>();

    const {favoriteCountries, addFavorite, removeFavorite} = useFavoriteStore()

    const isFavorite = favoriteCountries.some((fav) => fav.name.common === country.name.common);

    const addToFavorites = () => {
        if(isFavorite) {
            // dispatch(removeFavorite(country.name.common));
            removeFavorite(country.name.common);
        } else {
            // dispatch(addFavorite(country));
            addFavorite(country);
        }
    };

  return (
    <div className="border p-4 mt-5 rounded shadow-md relative">
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-4">
            <img src={country.flags?.png} alt={`${country.name.common} flag`} className="w-10 h-8" />
            <h3 className="text-xl font-semibold mb-2">{country.name.common}</h3>
        </div>
        <div className="flex justify-between items-center">
            <Link to={`/country/${country.name.common}`} className="text-blue-500 underline">View Details</Link>
            <button onClick={addToFavorites}>
                {isFavorite ? <FaHeart className="text-red-500 text-xl"/> : <FaRegHeart className="text-xl"/>}
            </button>
        </div>
    </div>
  );
};

export default CountryCard;
