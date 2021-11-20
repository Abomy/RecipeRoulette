import Layout from "../components/Layout";
import Link from "next/link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const Tile = ({ data }) => (
  <Link href="#" as={`#`}>
    <a>
      <h2>{data.title}</h2>
      <small> {data.stub}</small>
      <p>{data.content}</p>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 2rem;
          display: block;
        }
      `}</style>
    </a>
  </Link>
);

let test = {
  title: "Testerino",
  stub: "Tile test",
  content: "Hello world! classic.",
};

const Landing = () => {
  // const { loading, error, data } = useQuery(FeedQuery, {
  //   fetchPolicy: "cache-and-network",
  // })

  // if (loading) {
  //   return <div>Loading ...</div>
  // }
  // if (error) {
  //   return <div>Error: {error.message}</div>
  // }

  return (
    <Layout>
      <div className="page">
        <h1>Recipe Thigy!</h1>
        <main>{Tile({ data: test })}</main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Landing;
