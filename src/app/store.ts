import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/usersSlice/usersSlice";
import themeReducer from "./feautures/themeSlice";
import blogsReducer from "./feautures/blogSlice";
import singlePageSlice from "./feautures/singlePageSlice";
import favoritesReducer from "./feautures/favoriteSlice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    theme: themeReducer,
    blogs: blogsReducer,
    singleBlog: singlePageSlice,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
