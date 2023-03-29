import styled from "styled-components";
import { Media } from "ui";

const StyledBlogList = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 17.5px;
  padding-top: 50px;
`;

export { StyledBlogList };
