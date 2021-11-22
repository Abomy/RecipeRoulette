import { useForm } from "react-hook-form";
import styled from "styled-components";
import { gql, useMutation, useLazyQuery } from "@apollo/client";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ username: string; password: string }>();

  const onSubmit = async data => {
    await login({
      variables: {
        ...data,
      },
    });
  };

  return (
    <span>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Username / Email </label>
        <input {...register("username")} type="text" />

        <label> Password </label>
        <input type="password" {...register("password", { required: true })} />
        <input type="submit" value="Sign in" />
      </form>
      <div onClick={() => getMe()}>Look at me i'm a funny button :) </div>
    </span>
  );
}

const Temp = styled.div`
  width: 60%;
  margin: 20px auto;
`;
