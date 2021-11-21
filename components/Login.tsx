import { useForm } from "react-hook-form";
import styled from "styled-components";

// export default function LoginForm() {
//   return (
//     <form>
//       <div id="stacked">
//         <h1>Login</h1>
//         <label> Username / Email </label>
//         <input
//           id="fuser"
//           autoFocus
//           placeholder="Username / Email"
//           type="text"
//         />

//         <label> Password </label>
//         <input id="fpass" placeholder="Password" type="password" />
//         <input type="submit" value="Sign in" />
//       </div>
//     </form>
//   );
// }

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ username: string; password: string }>();
  const onSubmit = data => console.log(data);

  console.log(watch("username"));

  return (
    <Temp>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Username / Email </label>
        <input
          defaultValue="Username / Email"
          {...register("username")}
          type="text"
        />

        <label> Password </label>
        <input type="password" {...register("password", { required: true })} />
        <input type="submit" value="Sign in" />
      </form>
    </Temp>
  );
}

const Temp = styled.div`
  width: 60%;
  margin: 20px auto;
`;
