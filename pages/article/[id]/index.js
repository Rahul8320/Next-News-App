// import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const index = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta
          name="content"
          keyword="webdev news, programming, next js tutorial"
        />
      </Head>

      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href="/"> &larr; Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default index;
