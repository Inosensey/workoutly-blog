import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import BlogList from "../modules/Home/BlogContent/BlogList";
import Hero from "../modules/Home/Hero/Hero";
import Nav from "../common/Nav";

// GraphCms
const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.graphcms.com/v2/cl4m6kpla7bry01xv5pop3nrl/master"
);
const QUERY = gql`
  {
    posts {
      title
      datePublished
      slug
      author {
        name
        avatar {
          url
        }
      }
      content {
        text
      }
      coverPhoto {
        url
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: { posts },
    revalidate: 10,
  };
};

const Home: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>Workoutly Blog</title>
        <meta name="description" content="Generated by create next app" />
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

export default Home;
