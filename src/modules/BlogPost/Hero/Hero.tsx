import HeroBackground from "../../../common/HeroBackground";
import styles from "../../../../styles/BlogPost/Hero.module.css";

function Hero() {
  return (
    <HeroBackground>
      <div className={styles.contentContainer}>
        <h1>
          <span>Workoutly</span> Blog
        </h1>
      </div>
    </HeroBackground>
  );
}

export default Hero;
