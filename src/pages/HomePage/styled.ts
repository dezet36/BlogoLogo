import styled from "styled-components";
import { Color, H1, Media } from "ui";

export const HomePageWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  ${H1};
  text-align: start;
  ${Media.MEDIUM} {
    font-size: 42px;
  }
`;

export const SortBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  row-gap: 20px;
  padding-top: 50px;

  ${Media.MEDIUM} {
    flex-direction: column;
    align-items: center;
  }
`;

export const TabsBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${Color.WHITE};
  ${Media.MEDIUM} {
    justify-content: center;
  }
`;
