import { Children, cloneElement } from "react";
import { FieldValues, SubmitHandler, UseFormRegister } from "react-hook-form";

// export default function ReactHookForm(
//   ref: UseFormRegister<FieldValues>,
//   { children },
//   onSubmit?: SubmitHandler<any>
// ) {
//   console.log(children);
//   return <form onSubmit={onSubmit}></form>;
// }
export default function ReactHookForm({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
