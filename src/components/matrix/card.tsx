// Card.js
import React from "react";
import { BeakerIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";

import styles from "./card.module.css"; // Import CSS module for styling

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {/* Left side: Icon + Title */}
        <div className={styles.leftSide}>
          <BeakerIcon />
          {/* Left Icon */}
          <span className={styles.cardTitle}>Card Title</span> {/* Title */}
        </div>

        {/* Right side: Icons */}
        <div className={styles.rightSide}>
          <BeakerIcon />
          <ArchiveBoxIcon />
          <BeakerIcon />
          <ArchiveBoxIcon />
          <BeakerIcon />
          <ArchiveBoxIcon />
        </div>
      </div>

      <div className={styles.secondaryInfo}>Secondary Information</div>
      <div className={styles.coreBar}>
        <div className={styles.greenBox} />
        <div className={styles.greenBox} />
        <div className={styles.greenBox} />
      </div>
    </div>
  );
}
