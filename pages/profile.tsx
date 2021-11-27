import { CenteredCardBlock } from '../components/styled/card.styled';
import { Container } from '../components/styled/container.styled';
import { StyledLabel } from '../components/styled/fields.styled';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { PillButton } from '../components/Buttons/PillButton/PillButton';
import Highlight from '../components/Highlight';
import Link from 'next/link';
import { getAuthorizedUser } from '@lib/auth/auth';

interface AuthProps {
  user: {
    family_name?: string;
    given_name?: string;
    'http://teamlemon.com/role'?: string;
    id?: string;
    locale?: string;
    name?: string;
    nickname?: string;
    picture?: string;
    sub?: string;
    updated_at?: string;
  };
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    const auth = await getAuthorizedUser(req, res);
    return {
      props: {
        ...auth,
      },
    };
  },
});

function Profile({ user }: AuthProps) {
  return (
    <>
      {user && (
        <Container>
          <CenteredCardBlock opacity='0.9'>
            <StyledLabel>Welcome {user.name}</StyledLabel>
            <img src={user.picture} />
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
            <a href='/api/auth/logout'>
              <PillButton label={'Logout'} />
            </a>

            <Link href='/recipe/edit'>
              <PillButton label={'Create Recipe'} />
            </Link>
          </CenteredCardBlock>
        </Container>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <StyledLabel>Loading....</StyledLabel>,
  onError: (error) => <StyledLabel>{error.message}</StyledLabel>,
});
