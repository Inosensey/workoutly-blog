import styles from "../../../../styles/Home/BlogList.module.css";
import Blog from "./Blog";

export default function BlogList({ Posts }: any) {
  return (
    <section className={styles.container}>
      {Posts.map((post: any) => (
        <Blog {...post} key={Math.random() * 1000} />
      ))}
    </section>
  );
}
