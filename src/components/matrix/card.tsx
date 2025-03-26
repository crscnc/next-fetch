import React from "react";
import { BeakerIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";

import styles from "./card.module.css";

export default function Card({ areaDesc, tag, rgUnitListCount }) {
  const boxCount = Math.min(rgUnitListCount, 16);
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
          {Array.from({ length: boxCount }).map((_, index) => (
            <div key={index} className={styles.greenBox} />
          ))}
        </div>
      </section>
    </div>
  );
}
