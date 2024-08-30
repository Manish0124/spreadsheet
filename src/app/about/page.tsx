"use client";

import { useState } from "react";

export default function About() {
  const [cell, setcell] = useState([
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
  ]);

  let arr = ["A", "Ads", "ASdf"];
  let obj = {
    name: "hii",
  };

  return (
    <div>
      {JSON.stringify(cell)}
      <div>
        {cell.map((c, idx) => {
          return <>
          {}
          </>;
        })}
      </div>
    </div>
  );
}
