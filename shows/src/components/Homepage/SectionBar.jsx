import React from "react";
import Header from "../Header/header";

export default function SectionBar({ title }) {
  return (
    <div className="sectionbar">
      <h2 className="sectionbar__title">{title}</h2>
    </div>
  );
}