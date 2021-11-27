import { useForm } from 'react-hook-form';
import { gql, useMutation, useLazyQuery } from '@apollo/client';
import { Container } from './styled/container.styled';
import { CenteredCardBlock } from './styled/card.styled';
import ReactHookForm from './Form';
import { ButtonInput, PasswordInput, UserNameInput } from './Fields';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from './styled/button.styled';
import { useRouter } from 'next/dist/client/router';

const LOGIN = gql`
  mutation LogIn($password: String!, $username: String) {
    logIn(password: $password, username: $username) {
      id
      username
      email
      created
      last_login
      updated
    }
  }
`;

const GET_ME = gql`
  query GetMe {
    getMe {
      id
    }
  }
`;

export default function LoginForm() {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const [getMe, { called }] = useLazyQuery(GET_ME);
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await login({
        variables: {
          ...data,
        },
      });
      router.push('loggedin');
    } catch (err) {}
  };

  const validation = yup.object().shape({
    username: yup.string().required('Username rquired'),
    password: yup.string().required('Password rquired'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ username: string; password: string }>({
    resolver: yupResolver(validation),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return (
    <span>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <label> Username / Email </label>
        <input {...register("username")} type="text" />

        <label> Password </label>
        <input type="password" {...register("password", { required: true })} />
        <input type="submit" value="Sign in" />
      </form>
      <div onClick={() => getMe()}>Look at me i'm a funny button :) </div> */}

      <Container>
        <CenteredCardBlock opacity={'0.8'} margin={'2em'} padding={'10em'}>
          {error && <h1>Invalid username or password</h1>}
          <ReactHookForm onSubmit={handleSubmit(onSubmit)}>
            <UserNameInput
              label='Username:'
              name='username'
              error={errors.username}
              {...register('username')}
            />
            <PasswordInput
              label='Password:'
              name='password'
              error={errors.password}
              {...register('password')}
            />
            <ButtonInput label='Login' name='submit' />
          </ReactHookForm>
          <Button onMouseUp={() => getMe()}> Get meeee</Button>
        </CenteredCardBlock>
      </Container>
    </span>
  );
}
