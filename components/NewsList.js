import styles from "../styles/Article.module.css";
import NewsItem from "./NewsItem";

function NewsList({ articles }) {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <NewsItem article={article} key={article._id} />
      ))}
    </div>
  );
}

export default NewsList;
