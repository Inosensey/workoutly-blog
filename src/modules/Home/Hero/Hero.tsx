import HeroBackground from "../../../common/HeroBackground";
import styles from "../../../../styles/Home/Hero.module.css";

function Hero() {
  return (
    <HeroBackground>
      <div className={styles.contentContainer}>
        <p>Greetings!, Welcome to</p>
        <h1>
          <span>Workoutly</span> Blog
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          eveniet quis eius atque id similique reprehenderit saepe excepturi,
          ipsam, velit ipsa. In doloremque esse eveniet, at deleniti quis
          ratione, voluptas veritatis itaque nihil, soluta laudantium non aut
          ipsum nesciunt? A nulla blanditiis facilis aliquid dolores animi,
          omnis asperiores voluptatem molestiae?
        </p>
      </div>
    </HeroBackground>
  );
}

export default Hero;
