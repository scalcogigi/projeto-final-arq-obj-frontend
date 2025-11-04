import React from "react";
import Header from "../Header/header.jsx";
import SectionBar from "./SectionBar.jsx";
import ShowGrid from "../Shows/ShowGrid.jsx";
import { shows } from "../../data/Shows.js";   

export default function HomePage() {
  return (
    <div className="page">
      <Header />
      <SectionBar title="SHOWS" />
      <ShowGrid items={shows} />
    </div>
  );
}
