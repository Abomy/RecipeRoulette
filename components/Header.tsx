import { StyledHeader, Nav, Logo } from "./styled/header.styled";
import { Container } from "./styled/container.styled";
import { Button } from "./styled/button.styled";
import { Theme } from "../lib/theme";
import Link from "next/link";

export default function Header(...args) {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={Theme.images.logo} alt="" />
          <h1>Recipe Thingy!</h1>
          <Link href="login">
            <Button>Login</Button>
          </Link>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
