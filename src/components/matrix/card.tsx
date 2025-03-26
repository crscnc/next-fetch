import React from "react";
import { BeakerIcon, ArchiveBoxIcon, SunIcon } from "@heroicons/react/24/solid";
import styles from "./card.module.css";

export default function Card({ areaDesc, tag, rgUnitListCount, areaSubType }) {
  const boxCount = Math.min(rgUnitListCount, 25);

  return (
    <div className={styles.card}>
      <section>
        <div className={styles.cardHeader}>
          <div className={styles.leftSide}>
            <SunIcon className="size-5 text-blue-500" />

            <span className={styles.cardTitle}>{areaDesc}</span>
          </div>

          <div className={styles.rightSide}>
            <BeakerIcon className="size-4 text-blue-500" />
            <ArchiveBoxIcon className="size-4 text-blue-500" />
            <BeakerIcon className="size-4 text-blue-500" />
            <ArchiveBoxIcon className="size-4 text-blue-500" />
            <BeakerIcon className="size-4 text-blue-500" />
            <ArchiveBoxIcon className="size-4 text-blue-500" />
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
