import styled from "styled-components";
import { Color } from "ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 91px;
  width: clamp(250px, 1120px, 100%);
  padding: 24px 11px;
  margin: 0 auto;
  border-top: 1px solid ${Color.WHITE};
`;

const FooterText = styled.h3`
  color: ${Color.WHITE};
  font-weight: 400;
  line-height: 24px;
`;

export { StyledFooter, FooterText };
