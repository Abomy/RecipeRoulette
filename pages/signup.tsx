import { Container } from '../components/styled/container.styled';
import { CenteredCard } from '../components/styled/card.styled';
import ReactHookForm from '../components/Form';
import * as yup from 'yup';
import {
  ButtonInput,
  PasswordInput,
  UserNameInput,
  EmailInput,
} from '../components/Fields';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorFields from '../components/ErrorFields';
import { gql, useMutation } from '@apollo/client';

const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $email: String!
    $password: String!
    $username: String!
  ) {
    createAccount(email: $email, password: $password, username: $username) {
      id
    }
  }
`;

const validation = yup.object().shape({
  username: yup.string().required('Username rquired'),
  email: yup.string().email('Invalid email').required('Email required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Must contain one of each; lowercase, uppercase and numeric'
    )
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  const [createAccount, { data, loading, error }] = useMutation(CREATE_ACCOUNT);

  const submit = async (data) => {
    await createAccount({ variables: data });
  };

  return (
    <Container>
      <CenteredCard opacity={'0.8'} margin={'2em'} padding={'10em'}>
        <ReactHookForm onSubmit={handleSubmit(submit)}>
          <UserNameInput
            label='Username:'
            name='username'
            error={errors.username}
            {...register('username')}
          />
          <EmailInput
            label='Email:'
            name='email'
            error={errors.email}
            {...register('email')}
          />
          <PasswordInput
            label='Password:'
            name='password'
            error={errors.password}
            {...register('password')}
          />
          <PasswordInput
            label='Confirm password:'
            name='passwordConfirm'
            error={errors.passwordConfirm}
            {...register('passwordConfirm')}
          />
          <ButtonInput label='Sign Up' name='submit' />
          {errors && <ErrorFields errors={errors} />}
        </ReactHookForm>
      </CenteredCard>
    </Container>
  );
};

export default Signup;
