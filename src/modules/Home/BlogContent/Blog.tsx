import Link from "next/link";
import styles from "../../../../styles/Home/BlogList.module.css";
import { BlogType } from "../../../Typescript/ReusableTypes";

function Blog(props: BlogType) {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.coverPhotoContainer}>
        <img src={props.coverPhoto.url} alt="" />
      </div>
      <div className={styles.blogDetailsContainer}>
        <h2>{props.datePublished}</h2>
        <h2>{props.title}</h2>
        <div className={styles.blogContent}>
          <p>{props.content.text}</p>
        </div>
        <Link href={`../posts/${props.slug}`}>
          <h3>
            Read more <i className="fa-solid fa-angles-right"></i>
          </h3>
        </Link>

        <div className={styles.authorInfoContainer}>
          <div className={styles.authorAvatarContainer}>
            <img src={props.author.avatar.url} alt="" />
          </div>
          <p>{props.author.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
