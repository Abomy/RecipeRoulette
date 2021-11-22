import Socials from "./Socials";
import { Container } from "./styled/container.styled";
import { Flex } from "./styled/flex.styled";
import { StyledFooter } from "./styled/footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>

          <ul>
            <li>About</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
          <Socials />
        </Flex>

        <p>&copy; 2021 Team Lemon, All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}
