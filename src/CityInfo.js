import React from "react";
import "./Countries.css";
import { useData } from "./PostProvider";

const CityInfo = () => {
  const { data } = useData();
  return (
    <div className="country">
      <div className="world">
        {data.map((value) => {
          return (
            <div className="pto">
              <h2>{value.countryCode}</h2>
              <p>{value.city}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CityInfo;
