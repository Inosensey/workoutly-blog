import Link from "next/link";
import styles from "../../../../styles/BlogPost/BlogContent.module.css";

function BlogContent(props: any) {
  return (
    <section className={styles.container}>
      <div className={styles.coverPhotoContainer}>
        <img src={props.coverPhoto.url} alt="" />
      </div>
      <div className={styles.blogContent}>
        <h1>{props.title}</h1>
        <p className={styles.content}>{props.content.text}</p>
        <Link href={`../tag/${props.tags}`}>
          <p className={styles.tags}>{props.tags}</p>
        </Link>

        <div className={styles.authorInfoContainer}>
          <div className={styles.authorAvatarContainer}>
            <img src={props.author.avatar.url} alt="" />
          </div>
          <div className={styles.authorBio}>
            <h2>{props.author.name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              labore voluptatem corporis consequatur? Nam error explicabo,
              necessitatibus officia obcaecati cum libero eos quam. Sunt
              voluptate nisi ipsa possimus soluta quisquam rem a quam quas! Rem
              fugit, autem illo nobis dolorum, placeat quas vel tempora dicta
              quos est, voluptatem rerum adipisci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
