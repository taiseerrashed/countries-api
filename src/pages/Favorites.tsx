// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
import CountryCard from "../components/CountryCard";
import { useFavoriteStore } from "../store/useFavoritesStore";

const Favorites = () => {
    // const {favoriteCountries} = useSelector((state:RootState) => state.favorites);
    const {favoriteCountries} = useFavoriteStore();

  return (
    <div className="p-4 w-full md:w-[80%] mx-auto text-center">
        <h2 className="text-2xl font-bold">Favorite Countries</h2>
        {favoriteCountries.length === 0 ? (
            <p>No favorite countries selected.</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteCountries.map((country) => (
                    <CountryCard key={country.name.common} country={country} />
                ))}
            </div>
        )}
        
    </div>
  );
};

export default Favorites;
