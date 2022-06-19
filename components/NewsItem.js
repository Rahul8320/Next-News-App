import Image from "next/image";

function NewsItem({ article }) {
  return (
    <div>
      <Image src={article.media} alt="source image" width={400} height={400} />
      <h3>{article.title}</h3>
      <p>Post By : {article.author}</p>
      <p>Published On : {article.published_date}</p>
      <a href={article.link}> view full article</a>
      <p>Summary : {article.summary}</p>
    </div>
  );
}

export default NewsItem;
