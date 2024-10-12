import {create} from "zustand";
import { ICountry } from "../hooks/useCountries";

type FavoriteState = {
    favoriteCountries: ICountry[];
    addFavorite: (country:ICountry) => void;
    removeFavorite: (countryNmae: string) => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
    favoriteCountries: [],
    addFavorite: (country: ICountry) => set((state) => ({ favoriteCountries: [...state.favoriteCountries, country] })),
    removeFavorite: (countryNmae: string) => set((state) => ({ favoriteCountries: state.favoriteCountries.filter((country) => country.name.common !== countryNmae)})),
}));