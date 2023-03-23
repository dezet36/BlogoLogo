import React from "react";
import { MainStyled, BlogWraper } from "./styled";
import { Footer, HeaderNav } from "components";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  return (
    <MainStyled>
      <HeaderNav />
      <BlogWraper>
        <Outlet />
      </BlogWraper>
      <Footer />
    </MainStyled>
  );
};
