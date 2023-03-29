import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { addFavorite } from "./feautures/favoriteSlice";
import { getAllArticles } from "./selectors/blogSelector";
import { fetchNews } from "./feautures/blogSlice";
import { fetchArticles } from "./feautures/blogSlice";
import { getFavotites } from "./selectors/favoriteSelector";
import { getUserInfo } from "./selectors/userSelector";

export {
  useAppDispatch,
  useAppSelector,
  addFavorite,
  getAllArticles,
  fetchNews,
  fetchArticles,
  getFavotites,
  getUserInfo,
};
