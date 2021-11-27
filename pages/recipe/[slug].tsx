import { Recipe } from '.prisma/client';
import prisma from '@lib/prisma';
import { GetStaticPropsResult } from 'next';

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

export default function Post({ recipe }: PostProps) {
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

export async function getStaticPaths() {
  const slugs = await prisma.recipe.findMany({
    select: {
      slug: true,
    },
  });

  const paths = slugs.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: Params): Promise<GetStaticPropsResult<PostProps>> {
  const record = await prisma.recipe.findUnique({
    where: {
      slug: params.slug,
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
