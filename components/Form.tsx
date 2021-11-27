import React, { ReactNode } from 'react';
interface FormProps {
  children: ReactNode[];
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function ReactHookForm({ children, onSubmit }: FormProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
