import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Logo}>
        <h1>Yassine Chih</h1>
      </div>

      <div className={styles.navigationList}>
        <div className={styles.mainList}>
          <ul>
            <li>About me </li>
            <li>Skillset</li>
            <li>Technologies </li>
            <li>Projects</li>
          </ul>
        </div>

        <div className={styles.secList}>
          <ul>
            <li>Portfolio</li>
            <li>
              <Link href="#hashid">
                <Button text="contact me"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
