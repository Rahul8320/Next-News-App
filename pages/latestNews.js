import Head from "next/head";
import NewsList from "../components/NewsList";

function latestNews({ news }) {
  return (
    <div>
      <Head>
        <title>Latest News</title>
      </Head>

      <h1>Latest News</h1>
      <NewsList articles={news.articles} />
    </div>
  );
}

export default latestNews;

export const getStaticProps = async () => {
  var url =
    "https://api.newscatcherapi.com/v2/latest_headlines?lang=en&topic=tech&page_size=30";
  const res = await fetch(url, {
    headers: {
      "x-api-key": "API_KEY",
    },
  });

  const news = await res.json();
  console.log(typeof news);

  return {
    props: {
      news,
    },
  };
};
