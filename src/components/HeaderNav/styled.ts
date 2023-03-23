import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color, Media } from "ui";

const Navigation = styled.div`
  display: grid;
  grid-template-columns: 167px auto;
  align-items: center;
  gap: 32px;
  max-height: 100px;
  width: 100%;
  padding: 0 32px;
  background-color: ${Color.WHITE};
  ${Media.MEDIUM} {
    grid-template-columns: 1fr 1fr;
    padding: 0 22px;
  }
`;

const StyledNavLink = styled(Link)`
  width: 157px;
  padding: 20px 0;
  border-radius: 4.67px;
`;

export { Navigation, StyledNavLink };
