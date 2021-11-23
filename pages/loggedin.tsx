import LoginForm from "../components/Login";
import { CenteredCardBlock } from "../components/styled/card.styled";
import { Container } from "../components/styled/container.styled";

async function getInitialProps({ req, res }) {
  console.log("");
  //const { req, res } = context;
  console.log(req);
  console.log(res);
  //const { cookies } = req;

  return {
    props: { cookies: "" }, // will be passed to the page component as props
  };
}
function Loggedin() {
  return (
    <Container>
      <CenteredCardBlock opacity="0.9">
        <h1>You have logged in!</h1>
      </CenteredCardBlock>
    </Container>
  );
}

Loggedin.getInitialProps = getInitialProps;
export default Loggedin;
