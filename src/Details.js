import React, { useContext } from "react";
import "./Details.css";

import { Link, useParams } from "react-router-dom";
import { useData } from "./PostProvider";

const Details = () => {
  const { data } = useData();
  const { id } = useParams();
  const findData = data.find((e) => e.id == id);
  return (
    <div className="pts">
      <div className="pt_con">
        <div className="con">
          <h6 className="color">CITY NAME</h6>
          <h3>
            <span>{findData.countryCode}</span>
            {findData.city}
          </h3>
        </div>
        <div className="date">
          <h6 className="color">YOU WENT TO {findData.city} ON</h6>
          <p className="sun">{findData.date}</p>
        </div>
        <div className="note">
          <h6 className="color">NOTES</h6>
          <p className="sun">{findData.note}</p>
        </div>
        <div className="more">
          <h6 className="color">LEARN MORE</h6>
          <a href="#">Checkout this country on Wiki</a>
        </div>
        <div className="backbtn">
          <Link to="/Wise/City">
            {" "}
            <button type="button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
