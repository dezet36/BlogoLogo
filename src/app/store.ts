import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/usersSlice/usersSlice";
import themeReducer from "./feautures/themeSlice";
// import blogsReducer from "./feautures/blogSlice";
// import blogItemSlice from "./feautures/blogItemSlice";
import favoritesReducer from "./feautures/favoriteSlice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    theme: themeReducer,
    // blogs: blogsReducer,
    // singleBlog: blogItemSlice,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
