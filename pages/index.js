import Head from "next/head";
import ArticleList from "../components/ArticleList";

function index({ articles }) {
  return (
    <div>
      <Head>
        <title>Web Dev News</title>
        <meta
          name="content"
          keyword="webdev news, programming, next js tutorial"
        />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

export default index;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=26`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
