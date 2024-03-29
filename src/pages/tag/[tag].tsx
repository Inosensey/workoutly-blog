import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import BlogList from "../../modules/Home/BlogContent/BlogList";
import Hero from "../../modules/Tag/Hero";
import Nav from "../../common/Nav";
import { BlogType } from "../../Typescript/ReusableTypes";

// GraphCms
const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.graphcms.com/v2/cl4m6kpla7bry01xv5pop3nrl/master"
);
const QUERY = gql`
  query Posts($tag: String!) {
    posts(where: { tags: $tag }) {
      title
      datePublished
      slug
      content {
        text
      }
      coverPhoto {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

const TAGLIST = gql`
  {
    posts {
      tags
    }
  }
`;
interface Props {
  posts: BlogType[];
}
interface Params {
  params: {
    tag: string;
  };
}

export const getStaticPaths = async () => {
  const { posts } = await graphcms.request(TAGLIST);
  return {
    paths: posts.map((post: any) => ({ params: { tag: post.tags } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const tag = params.tag;
  const data = await graphcms.request(QUERY, { tag });
  const posts = data.posts;
  return {
    props: { posts },
    revalidate: 10,
  };
};

const TagPage: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Workoutly Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <Nav />
        <Hero />
        <BlogList Posts={posts} />
      </main>
    </div>
  );
};

export default TagPage;
