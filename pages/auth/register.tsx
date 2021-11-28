import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import prisma from '@lib/prisma';
import Router from 'next/router';
import React from 'react';

interface Props {
  redirect?: boolean;
}

export default function Profile({ redirect }: Props) {
  React.useEffect(() => {
    if (redirect) {
      Router.replace('/');
    }
  });
  //If loading get slow on production, show processing
  return `</>`;
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    const { user } = getSession(req, res);

    console.log(user);

    let record = await prisma.account.findFirst({
      where: { auth0: user.sub },
    });

    if (!record) {
      record = await prisma.account.create({
        data: {
          username: user.nickname || user.name,
          auth0: user.sub,
        },
      });
    }

    return {
      props: {
        redirect: true,
      },
    };
  },
});
