// app/matrix/page.js
import React, { Suspense } from "react";

// Fetch function to get data from the API
const fetchData = async () => {
  const res = await fetch(
    "http://192.168.68.105:8081/api/v1/matrix/matrix-list"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// MatrixPage component wrapped with Suspense for data fetching
const MatrixPage = () => {
  return (
    <Suspense fallback={<div>Loading matrix data...</div>}>
      <MatrixList />
    </Suspense>
  );
};

// MatrixList component that fetches data and displays it
const MatrixList = async () => {
  const data = await fetchData(); // Fetch the data on the server side

  return (
    <div>
      <h1>Matrix List</h1>
      {data.map((area, areaIndex) => (
        <div key={areaIndex} className="area">
          <h2>{area.areaDesc}</h2>
          <p>
            <strong>Tag:</strong> {area.tag}
          </p>
          <p>
            <strong>Area Type:</strong> {area.areaType}
          </p>
          <p>
            <strong>Area SubType:</strong> {area.areaSubType}
          </p>
          <p>
            <strong>Area UID:</strong> {area.areaUid}
          </p>

          {/* Render the rgUnitList for each area */}
          <div className="units">
            <h3>Units:</h3>
            <ul>
              {area.rgUnitList.map((unit, unitIndex) => (
                <li key={unitIndex}>
                  <p>
                    <strong>Unit Tag:</strong> {unit.tag}
                  </p>
                  <p>
                    <strong>Unit Type:</strong> {unit.aggTypeDesc}
                  </p>
                  <p>
                    <strong>Description:</strong> {unit.aggDesc}
                  </p>
                  <p>
                    <strong>External ID:</strong> {unit.externalId || "N/A"}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatrixPage;
