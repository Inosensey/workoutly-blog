import styles from "../../styles/HeroBackground.module.css";

function HeroBackground({ children }: any) {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}>{children}</div>
    </section>
  );
}

export default HeroBackground;
