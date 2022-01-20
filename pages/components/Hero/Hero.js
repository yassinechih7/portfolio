import React from "react";
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.mainTitle}>
        <h1>Hi I’m Yassine, <br /> Full Stack Developer</h1>
      </div>
      <div className={styles.subTitle}>
        Self-taught full stack developer that obsessed computers electronics
        hacking and everything that requires mental effort.
      </div>
    </div>
  );
}

export default Hero;
