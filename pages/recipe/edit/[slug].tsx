import { Recipe } from '.prisma/client';
import prisma from '@lib/prisma';
import { GetStaticPropsResult } from 'next';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { StyledLabel } from '@components/styled/fields.styled';

interface PostProps {
  recipe: Recipe & {
    _count: {
      favorites: number;
    };
    creator: {
      username: string;
      email: string;
    };
  };
}

type Params = {
  params: {
    slug: string;
  };
};

function RecipeEditor({ recipe, user }: AppendUsers) {
  const { _count } = recipe;

  return (
    <div
      css={`
        display: flex;
        font-size: 20px;
        font-weight: 600;
        padding: 20px;
        flex-direction: column;
      `}
    >
      <div>{recipe.id}</div>
      <div
        css={`
          color: red;
          padding-top: 20px;
        `}
      >
        {_count.favorites}: loved this recipe!
      </div>
    </div>
  );
}

export async function getServerSideProps({
  params: { slug },
}: Params): Promise<GetStaticPropsResult<PostProps>> {
  const record = await prisma.recipe.findUnique({
    where: {
      slug: slug,
    },
    include: {
      creator: {
        select: {
          username: true,
          email: true,
        },
      },
      _count: {
        select: { favorites: true },
      },
    },
  });

  return {
    props: {
      recipe: record,
    },
  };
}

interface AppendUsers extends PostProps {
  user: any;
}

export default withPageAuthRequired<AppendUsers>(RecipeEditor, {
  onRedirecting: () => <StyledLabel>Loading....</StyledLabel>,
  onError: (error) => <StyledLabel>{error.message}</StyledLabel>,
});
