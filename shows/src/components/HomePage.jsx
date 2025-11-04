import React from "react";
import Header from "./Header.jsx";
import SectionBar from "./SectionBar.jsx";
import ShowGrid from "./ShowGrid.jsx";
import { shows } from "../data/Shows.js";   

export default function HomePage() {
  return (
    <div className="page">
      <Header />
      <SectionBar title="SHOWS" />
      <ShowGrid items={shows} />
    </div>
  );
}
