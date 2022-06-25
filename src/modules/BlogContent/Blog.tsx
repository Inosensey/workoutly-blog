import Image from "next/image";
import styles from "../../../styles/BlogList.module.css";

function Blog(props: any) {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.coverPhotoContainer}>
        <img src={props.coverPhoto.url} alt="" />
      </div>
      <div className={styles.blogDetailsContainer}>
        <h2>{props.datePublished}</h2>
        <h2>{props.title}</h2>
        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: props.content.html }}
        ></div>
        <h3>Read more</h3>
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
