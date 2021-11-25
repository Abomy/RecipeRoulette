import { useRouter } from "next/dist/client/router";
import LoginForm from "../components/Login";
import { CenteredCardBlock } from "../components/styled/card.styled";
import { Container } from "../components/styled/container.styled";
import { StyledLabel } from "../components/styled/fields.styled";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Button } from "../components/styled/button.styled";
import Highlight from "../components/Highlight";

// export async function getServerSideProps({ req, res }) {
//   //const { req, res } = context;
//   const { cookies } = req;
//   if (cookies.token === undefined) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/login",
//       },
//     };
//   }
//   return {
//     props: { cookie: cookies }, // will be passed to the page component as props
//   };
// }

function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <StyledLabel>Loading....</StyledLabel>}
      {user && (
        <Container>
          <CenteredCardBlock opacity="0.9">
            <StyledLabel>Welcome {user.name}</StyledLabel>
            <img src={user.picture} />
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
            <a href="/api/auth/logout">
              <Button>Logout</Button>
            </a>
          </CenteredCardBlock>
        </Container>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <StyledLabel>Loading....</StyledLabel>,
  onError: error => <StyledLabel>{error.message}</StyledLabel>,
});
