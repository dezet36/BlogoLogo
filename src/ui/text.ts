import { css } from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";

const H1 = css`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  color: #323537;
  ${Media.SMALL} {
    font-size: 32px;
    line-height: 48px;
  }
`;
const H2 = css`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #323537 ${Media.SMALL} {
    font-size: 24px;
    line-height: 36px;
  }
`;
const H3 = css`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #323537;
`;
const S1 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #323537;
`;
const B1 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #323537;
  ${Media.SMALL} {
    font-size: 16px;
    line-height: 24px;
  }
`;
const B2 = css`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #323537;
`;

export { H1, H2, H3, S1, B1, B2 };
