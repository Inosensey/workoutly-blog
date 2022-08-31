import styles from "../../../../styles/Home/BlogList.module.css";
import { BlogType } from "../../../Typescript/ReusableTypes";
import Blog from "./Blog";

export default function BlogList(props: { Posts: BlogType[] }) {
  return (
    <section className={styles.container}>
      {props.Posts.map((post: BlogType) => (
        <Blog {...post} key={Math.random() * 1000} />
      ))}
    </section>
  );
}
