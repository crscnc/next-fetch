import React, { Suspense } from "react";
import Card from "@/components/matrix/card";
import styles from "@/components/matrix/card.module.css";

const fetchData = async () => {
  const res = await fetch(
    "http://192.168.68.105:8081/api/v1/matrix/matrix-list"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const MatrixPage = () => {
  return (
    <Suspense fallback={<div>Loading matrix data...</div>}>
      <MatrixList />
    </Suspense>
  );
};

const MatrixList = async () => {
  const data = await fetchData();

  return (
    <div>
      <h1>Matrix List</h1>
      <div className={styles.box}>
        {data.map((area, areaIndex) => (
          <div key={areaIndex} className="">
            <Card
              areaDesc={
                area.areaDesc ? area.areaDesc : "No Description Available"
              }
              tag={area.tag}
              rgUnitListCount={area.rgUnitList.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatrixPage;
