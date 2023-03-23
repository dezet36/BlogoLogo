import { Navigation, StyledNavLink } from "./styled";
import { ROUTE } from "../../routes/routers";
import { Logo } from "assets";
import { useToggle } from "hooks";

export const HeaderNav = () => {
  const [isActive, setActive] = useToggle();

  return (
    <Navigation>
      <StyledNavLink to={ROUTE.HOME}>
        <Logo />
      </StyledNavLink>
    </Navigation>
  );
};
