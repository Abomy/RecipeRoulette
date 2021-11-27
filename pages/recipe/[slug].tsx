import { Recipe } from '.prisma/client';
import prisma from '@lib/prisma';
import { GetStaticPropsResult } from 'next';

interface PostProps {
  recipe: Recipe;
}

type Params = {
  params: {
    slug: string;
  };
};

export default function Post(props: PostProps) {
  const {
    recipe: { id },
  } = props;

  return (
    <div
      css={`
        font-size: 20px;
        font-weight: 600;
        padding: 20px;
      `}
    >
      {id}
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
  });

  return {
    props: {
      recipe: record,
    },
  };
}
