import { MainTemplate } from "templates";
import {
  HomePage,
  FavoritePage,
  AccountPage,
  BlogPage,
  NotFoundPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTE } from "./routers";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.CONTENT} element={<BlogPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      <Route element={}>
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritePage />} />
      </Route>
    </Route>
  )
);
