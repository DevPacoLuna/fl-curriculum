"use client";
import styles from "./Overview.module.scss";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import Spline from "@splinetool/react-spline";

export const Overview = () => {
  return (
    <article className={styles.overview}>
      <div className={styles.overviewContainer}>
        <div className={styles.presentation}>
          <h2 className={styles.position}>Senior Software Developer</h2>
          <h1 className={styles.name}>Paco Luna</h1>
          <div className={styles.extra}>
            <h3>
              Passionate about entrepreneurship, learning, and writing elegant,
              reusable, and unique code.
            </h3>
            <div className={styles.extraImage}>
              <EmojiEventsIcon />
            </div>
          </div>
          <button
            className={styles.learnMore}
            onClick={() =>
              window.open("https://github.com/DevPacoLuna", "_blank")
            }
          >
            <PlayCircleFilledRoundedIcon />
            <p>LEARN MORE</p>
          </button>
        </div>
        <div className={styles.overviewImage}>
          <Spline
            scene="https://prod.spline.design/X97wcJkhPt7VGTn4/scene.splinecode"
            className={styles.canva}
          />
        </div>
      </div>
    </article>
  );
};
