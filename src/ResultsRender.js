import React, { useState } from "react";
import { FaCity } from "react-icons/fa";

import ResultsFilter from "./ResultsFilter.js";

export default function ResultsRender() {
  const [location, setLocation] = useState("default");

  let cities = [
    "warszawa",
    "krakow",
    "lodz",
    "wroclaw",
    "gdansk",
    "poznan",
    "katowice",
    "bialystok",
    "lublin",
    "rszeszow"
  ];
  let regions = [
    "dolnoslaskie",
    "kujawsko-pomorskie",
    "lubelskie",
    "lubuskie",
    "lodzkie",
    "malopolskie",
    "mazowieckie",
    "opolskie",
    "podkarpackie",
    "podlaskie",
    "pomorskie",
    "slaskie",
    "swietokrzyskie",
    "warminsko-mazurskie",
    "wielkopolskie",
    "zachodniopomorskie"
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          {cities.map((city) => (
            <button
              style={{
                fontSize: "0.9rem",
                padding: "0.3rem",
                margin: "0.2rem"
              }}
              value={city}
              key={city}
              onClick={(el) => setLocation(el.target.value)}
            >
              {" "}
              {`${city[0].toUpperCase()}${city.slice(1, city.length)}`}
            </button>
          ))}
          <select
            style={{ fontSize: "0.9rem", padding: "0.3rem", margin: "0.2rem" }}
            onChange={(el) => setLocation(el.target.value)}
          >
            {" "}
            <option value="dogos"> Województwo </option>
            {regions.map((region) => (
              <option value={region}>{`${region[0].toUpperCase()}${region.slice(
                1,
                region.length
              )}`}</option>
            ))}
          </select>
        </div>
        {location !== "default" && (
          <p>
            <FaCity />{" "}
            {`${location[0].toUpperCase()}${location.slice(
              1,
              location.length
            )}`}
          </p>
        )}

        <ResultsFilter location={location} />
      </div>
    </>
  );
}
