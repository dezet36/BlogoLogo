import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Media, S1 } from "ui";

export const TabCustom = styled(NavLink)<{ $isActive: boolean }>`
  ${S1};
  padding: 0 40px 15px 40px;
  border-bottom: ${({ $isActive }) =>
    $isActive ? `2px solid ${Color.PRIMARY}` : "transparent"};
  cursor: pointer;
  :hover {
    color: ${Color.PRIMARY_SECOND};
  }
  ${Media.MEDIUM} {
    width: 50%;
    text-align: center;
  }
`;
