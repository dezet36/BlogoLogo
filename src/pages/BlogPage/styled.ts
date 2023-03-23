import styled from "styled-components";
import { Color, H2 } from "ui";

const BlogContentWrap = styled.div`
  max-width: 1110px;
`;

const SliderWrap = styled.div`
  width: 100%;
  padding-top: 36px;
  border-top: 1px solid ${Color.WHITE};
`;

const RecommendationsTitle = styled.h3`
  ${H2}
  padding-bottom: 36px;
`;

export { BlogContentWrap, SliderWrap, RecommendationsTitle };
