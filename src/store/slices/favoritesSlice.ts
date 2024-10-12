// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ICountry } from "../../hooks/useCountries";

// interface IFavoritesState {
//     favoriteCountries: ICountry[];
// };

// const initialState: IFavoritesState = {
//     favoriteCountries: [],
// };

// const favoriteSlice = createSlice({
//     name: "favorites",
//     initialState,
//     reducers: {
//         addFavorite: (state, action: PayloadAction<ICountry>) => {
//             state.favoriteCountries.push(action.payload);
//         },
//         removeFavorite: (state, action: PayloadAction<string>) => {
//             state.favoriteCountries = state.favoriteCountries.filter((country) => country.name.common !== action.payload);
//         },
//     },
// });

// export const { addFavorite, removeFavorite } = favoriteSlice.actions;
// export default favoriteSlice.reducer;
