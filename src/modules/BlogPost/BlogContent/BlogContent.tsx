import styles from "../../../../styles/BlogPost/BlogContent.module.css";

function BlogContent(props: any) {
  return (
    <section className={styles.container}>
      <div className={styles.coverPhotoContainer}>
        <img src={props.coverPhoto.url} />
      </div>
      <div className={styles.blogContent}>
        <h1>{props.title}</h1>
        <p>{props.content.text}</p>
        <p>Tags here</p>
        <div>
          <p>{props.author.name}</p>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
