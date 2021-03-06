import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Button from "../Button/Button";
import fuIcon from "../../public/fuIcon.svg";
import Link from "next/link";

function ProjectCard(props) {
  const title = props.title;
  const icon = props.icon;
  const fList = props.fList;
  const description = props.description;
  const demo = props.demo;
  const source = props.source;

  return (
    <div className={styles.ProjectCard}>
      <div className={styles.cardTitle}>{title}</div>

      <div className={styles.contentWrapper}>
        <div className={styles.ProjectCardImg}>
          <Image src={icon} alt="fb" width={264} height={150} />
        </div>
        <div className={styles.futuresList}>
          <ul>
            {fList.map((item, index) => (
              <li key={index}>
                <Image src={fuIcon} alt="" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.cardDescription}>{description}</div>

        <div className={styles.buttonWrapper}>
          <div className={styles.demoButton}>
            <Link href={demo} passHref>
              <Button text="Live demo" />
            </Link>
          </div>

          <div className={styles.sourceButton}>
            <Link href={source} passHref>
              <Button text="Source code" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
