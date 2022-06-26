import { NextPage } from "next";
import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";
import React from "react";
import Nav from "../../common/Nav/Nav";
import Hero from "../../modules/BlogPost/Hero/Hero";
import BlogContent from "../../modules/BlogPost/BlogContent/BlogContent";

//Grapcms
const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.graphcms.com/v2/cl4m6kpla7bry01xv5pop3nrl/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
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

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export const getStaticPaths = async () => {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: { post },
    revalidate: 10,
  };
};

const BlogPost: NextPage = ({ post }: any) => {
  console.log(post);
  return (
    <div>
      <Head>
        <title>Workoutly Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Hero />
        <BlogContent {...post} />
      </main>
    </div>
  );
};

export default BlogPost;
