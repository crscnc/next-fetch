// Card.js
import React from "react";
import { BeakerIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";

import styles from "./card.module.css"; // Import CSS module for styling

export default function Card() {
  return (
    <div className={styles.card}>
      <section>
        <div className={styles.cardHeader}>
          <div className={styles.leftSide}>
            {tag}
            <span className={styles.cardTitle}>{areaDesc}</span>
          </div>

          <div className={styles.rightSide}>
            <BeakerIcon />
            <ArchiveBoxIcon />
            <BeakerIcon />
            <ArchiveBoxIcon />
            <BeakerIcon />
            <ArchiveBoxIcon />
          </div>
        </div>
      </section>
      <section>
        <div className={styles.secondaryInfo}>Secondary Information</div>
      </section>
      <section>
        <div className={styles.coreBar}>
          <div className={styles.greenBox} />
          <div className={styles.greenBox} />
          <div className={styles.greenBox} />
        </div>
      </section>
    </div>
  );
}
