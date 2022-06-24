import Image from "next/image";
import styles from "../../../styles/nav.module.css";

function Nav() {
  return (
    <nav className={styles.container}>
      <div className={styles.SiteNameContainer}>
        <div className={styles.logoContainer}>
          <Image src="/img/Logo.png" layout="fill" objectFit="contain" alt="" />
        </div>
        <h2>Workoutly.</h2>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <p>Home</p>
          <p>Authors</p>
          <p>Contact</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
