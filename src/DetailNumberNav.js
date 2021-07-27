import React from "react";

export default function DetailNumberNav(props) {
  let doglist = props.doglist;
  let pageNumber = props.pageNumber;

  return (
    <p>
      <span>
        (
        {Math.floor(5 * (pageNumber - 1)) + 1 > doglist.length
          ? 1
          : Math.floor(5 * (pageNumber - 1)) + 1}
      </span>
      -
      <span>
        {Math.floor(5 * pageNumber) > doglist.length
          ? doglist.length
          : Math.floor(5 * pageNumber)}
        )
      </span>{" "}
      of <span> {doglist.length} </span>
    </p>
  );
}
