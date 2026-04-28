import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ICountry } from "../hooks/useCountries";

type FavoriteState = {
  favoriteCountries: ICountry[];
  addFavorite: (country: ICountry) => void;
  removeFavorite: (countryName: string) => void;
};

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      favoriteCountries: [],
      addFavorite: (country) =>
        set((state) => ({
          favoriteCountries: [...state.favoriteCountries, country],
        })),
      removeFavorite: (countryName) =>
        set((state) => ({
          favoriteCountries: state.favoriteCountries.filter(
            (c) => c.name.common !== countryName
          ),
        })),
    }),
    {
      name: "favorite-countries",
    }
  )
);
