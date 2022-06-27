import styles from "../../../../styles/BlogPost/Comments.module.css";

function Comments() {
  return (
    <section className={styles.container}>
      <h2 className={styles.numberOfComments}>0 Comment</h2>
    </section>
  );
}

export default Comments;
