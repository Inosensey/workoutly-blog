import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/Nav.module.css";
import Link from "next/link";

function Nav() {
  const [currentWindowHeight, setCurrentWindowHeight] = useState(0);
  const [previousWindowHeight, setPreviousWindowHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState("NotScrolling");

  const handleScroll = () => {
    setCurrentWindowHeight(window.scrollY);
  };
  const CheckScrollHeight = () => {
    setPreviousWindowHeight(currentWindowHeight);
    if (currentWindowHeight === 0) return setIsScrolling("NotScrolling");
    if (currentWindowHeight > previousWindowHeight)
      return setIsScrolling("ScrollDown");

    if (currentWindowHeight < previousWindowHeight)
      return setIsScrolling("ScrollUp");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    CheckScrollHeight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWindowHeight]);

  return (
    <nav
      className={
        isScrolling === "NotScrolling"
          ? styles.container
          : isScrolling === "ScrollUp"
          ? `${styles.container} ${styles.scrollUp}`
          : `${styles.container} ${styles.scrollDown}`
      }
    >
      <div className={styles.SiteNameContainer}>
        <div className={styles.logoContainer}>
          <Image src="/img/Logo.png" layout="fill" objectFit="contain" alt="" />
        </div>
        <h2>Workoutly.</h2>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <Link href="/">
            <p>Home</p>
          </Link>
          <p>Authors</p>
          <p>Contact</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
