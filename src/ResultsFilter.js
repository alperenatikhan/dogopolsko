import React, { useState, useEffect } from "react";
import DogoCard from "./DogoCard.js";
import dogos from "./db1.json";
import DetailNumberNav from "./DetailNumberNav.js";

import { FaDog } from "react-icons/fa";

export default function ResultsFilter(props) {
  let location = props.location;
  let [pageNumber, setPageNumber] = useState(1);
  let [totalPageNumber, setTotalPageNumber] = useState(1);
  let [noResultsFound, setNoResultsFound] = useState(false);

  let [doglist, setDoglist] = useState(dogos);
  let [isLoading, setIsloading] = useState(false);

  const dogdata = (location) => {
    setIsloading(true);
    fetch(
      `https://dogsofpoland-default-rtdb.europe-west1.firebasedatabase.app/${location}.json`
    )
      .then((data) => data.json())
      .then((data) => {
        if (data) {
          setDoglist(data);
          setNoResultsFound(false);
        } else {
          setNoResultsFound(true);
          setDoglist(dogos);
        }
      });
  };

  useEffect(() => {
    if (location !== "default") {
      dogdata(location);
      setIsloading(false);
    } else {
      setDoglist(dogos);
    }
  }, [location]);

  useEffect(() => {
    setTotalPageNumber(Math.ceil(doglist.length / 5));
    setPageNumber(1);
  }, [doglist]);

  let upToTotalPageNumber = [];
  for (let num = 1; num < totalPageNumber + 1; num++) {
    upToTotalPageNumber.push(num);
  }

  return (
    <>
      {noResultsFound ? (
        <h3> Niestety, bez rezultatów.</h3>
      ) : (
        <p>
          {" "}
          <FaDog /> <strong>{doglist.length} </strong> ogłoszenia{" "}
        </p>
      )}
      <DetailNumberNav pageNumber={pageNumber} doglist={doglist} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        {upToTotalPageNumber.map((num) => (
          <button
            key={num}
            value={num}
            onClick={(el) => setPageNumber(el.target.value)}
          >
            {" "}
            {num}{" "}
          </button>
        ))}
      </div>
      <div
        className="dogogrid"
        style={{
          width: "95vw",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          placeItems: "center"
        }}
      >
        {isLoading && <h1>Loading... </h1>}
        {doglist &&
          doglist
            .slice(Math.floor(5 * (pageNumber - 1)), Math.floor(5 * pageNumber))
            .map((item) => <DogoCard item={item} />)}
      </div>
    </>
  );
}
