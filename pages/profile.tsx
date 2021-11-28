import { CenteredCardBlock } from '../components/styled/card.styled';
import { Container } from '../components/styled/container.styled';
import { StyledLabel } from '../components/styled/fields.styled';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { PillButton } from '../components/Buttons/PillButton/PillButton';
import Highlight from '../components/Highlight';
import { getAuthorizedUser, serverSideAuthHandler } from '@lib/auth/auth';

interface AuthProps {
  test: string;
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

export const getServerSideProps = serverSideAuthHandler((req, res, user) => {
  console.log(user);
  return {
    test: 'test',
  };
});

export default function Profile({ user, test }: AuthProps) {
  console.log(test);
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
          </CenteredCardBlock>
        </Container>
      )}
    </>
  );
}

// export default withPageAuthRequired(Profile, {
//   onRedirecting: () => <StyledLabel>Loading....</StyledLabel>,
//   onError: (error) => <StyledLabel>{error.message}</StyledLabel>,
// });
