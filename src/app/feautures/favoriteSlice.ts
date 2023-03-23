import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogItem } from "types";

interface FavoritesState {
  results: BlogItem[];
}

const initialState: FavoritesState = {
  results: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<BlogItem>) => {
      const favoriteUnit = state.results.find(
        (favorive) => favorive.id === payload.id
      );
      !favoriteUnit && state.results.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.results));
    },
    removeFavorites: (state, { payload }: PayloadAction<BlogItem>) => {
      state.results = state.results.filter(
        (result) => result.id !== payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.results));
    },
  },
});

export default favoritesSlice.reducer;

export const { addFavorite, removeFavorites } = favoritesSlice.actions;
