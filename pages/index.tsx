import { Container } from "../components/styled/container.styled";
import Header from "../components/Header";
import Card from "../components/Login";
import { StyledCard, CenteredCard } from "../components/styled/card.styled";
import LoginForm from "../components/Login";

const Landing = () => {
  return (
    <Container>
      <Header></Header>
      <CenteredCard opacity="0.9">
        <LoginForm />
      </CenteredCard>
    </Container>
  );
};

export default Landing;
