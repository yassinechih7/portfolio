import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";

import fb from "../../public/fb.svg";
import ig from "../../public/ig.svg";
import twitter from "../../public/twitter.svg";
import github from "../../public/github.svg";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.rightsText}>
        <p>© 2022 Yassine Chih</p>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <Image src={fb} alt="fb" width={50} height={50} />
          </li>
          <li>
            <Image src={ig} alt="twitter" width={50} height={50} />
          </li>
          <li>
            <Image src={twitter} alt="ig" width={50} height={50} />
          </li>
          <li>
            <Image src={github} alt="github" width={50} height={50} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
