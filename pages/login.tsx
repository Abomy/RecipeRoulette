import LoginForm from '../components/Login';

export async function getServerSideProps({ req }) {
  //const { req, res } = context;
  const { cookies } = req;

  if (cookies.token) {
    return {
      redirect: {
        permanent: false,
        destination: '/loggedin',
      },
    };
  }
  return {
    props: { cookie: cookies }, // will be passed to the page component as props
  };
}

const Landing = () => {
  return <LoginForm />;
};

export default Landing;
