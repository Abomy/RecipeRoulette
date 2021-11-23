import { useRouter } from "next/dist/client/router";
import LoginForm from "../components/Login";
import { CenteredCardBlock } from "../components/styled/card.styled";
import { Container } from "../components/styled/container.styled";
import { StyledLabel } from "../components/styled/fields.styled";

export async function getServerSideProps({ req, res }) {
  //const { req, res } = context;
  const { cookies } = req;
  if (cookies.token === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: { cookie: cookies }, // will be passed to the page component as props
  };
}
export default function Loggedin({ cookie }) {
  console.log(cookie);
  return (
    <Container>
      <CenteredCardBlock opacity="0.9">
        <StyledLabel>You have logged in!</StyledLabel>
        <StyledLabel>{cookie.token}</StyledLabel>
      </CenteredCardBlock>
    </Container>
  );
}
