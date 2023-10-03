import React, { useState } from "react";
import "./Wise.css";
import { Link, Outlet, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useData } from "./PostProvider";
import Form from "./Form";
import City from "./City";

const Wise = () => {
  const { data, mapchange, FormFalse, Maping } = useData();
  const { id } = useParams();
  const findData = data.find((e) => e.id == id);
  return (
    <div className="wise">
      <div className="citiwise">
        <div className="top">
          <div className="logos">
            <Link to="/Home">
              <img src="/image/logo.png"></img>
            </Link>
          </div>
          <div className="btnsList">
            <ul>
              <li>
                <Link to="City" onClick={FormFalse}>
                  City
                </Link>
              </li>
              <li>
                <Link to="CityInfo" onClick={FormFalse}>
                  country
                </Link>
              </li>
            </ul>
          </div>
          <div className="country_list">{Maping ? <Form /> : <Outlet />}</div>
        </div>
        <div className="footer">
          <p>© Copyright 2023 by WorldWise Inc.</p>
        </div>
      </div>

      <div className="map" onClick={mapchange}>
        <MapContainer
          center={findData ? [findData.lat, findData.long] : [12.9349, 80.2137]}
          zoom={13}
          scrollWheelZoom={true}
          className="map-container"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={
              findData ? [findData.lat, findData.long] : [12.9349, 80.2137]
            }
          >
            <Popup>{findData ? findData.city : "chennai"}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Wise;
