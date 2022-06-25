import styles from "../../../styles/BlogList.module.css";
import Blog from "./Blog";

export default function BlogList({ Posts }: any) {
  console.log(Posts);
  return (
    <section className={styles.container}>
      {Posts.map((post: any) => (
        <Blog {...post} key={Math.random() * 1000} />
      ))}
    </section>
  );
}
