import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocials } from "./styled/socials.styled";

export default function Socials() {
  return (
    <StyledSocials>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocials>
  );
}
