import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTE } from "./routers";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={}>
      <Route index element={} />
      <Route path={ROUTE.CONTENT} element={} />
      <Route path={ROUTE.SEARCH} element={} />
      <Route path={ROUTE.SIGN_IN} element={} />
      <Route path={ROUTE.SIGN_UP} element={} />
      <Route element={}>
        <Route path={ROUTE.ACCOUNT} element={} />
        <Route path={ROUTE.FAVORITES} element={} />
      </Route>
    </Route>
  )
);
