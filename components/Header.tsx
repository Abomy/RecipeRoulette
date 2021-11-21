import { StyledHeader, Nav, Logo } from "./styled/header.styled";
import { Container } from "./styled/container.styled";
import { Button } from "./styled/button.styled";
import { Theme } from "../lib/theme";

export default function Header(...args) {
  console.log(args);
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={Theme.images.logo} alt="" />
          <h1>Recipe Thingy!</h1>
          <Button>Login</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
