import Link from "next/link";
import styles from "../../../../styles/BlogPost/OtherBlogs.module.css";
import { PostListType } from "../Typescript/Types";

function OtherBlogs(params: { Blogs: PostListType[] }) {
  return (
    <section className={styles.container}>
      <h3>Explore other blogs</h3>
      <div className={styles.blogList}>
        {params.Blogs.map((data: PostListType) => (
          <div key={Math.random() * 1000} className={styles.blog}>
            <div className={styles.coverPhotoContainer}>
              <img src={data.coverPhoto.url} alt="" />
            </div>
            <div className={styles.blogInfoContainer}>
              <Link href={`${data.slug}`}>
                <h5>{data.title}</h5>
              </Link>
              <p>{data.datePublished}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OtherBlogs;
