import React from "react";
import Header from "../Header/header.jsx";
import SectionBar from "../Homepage/SectionBar.jsx";
import BandForm from "./BandForm.jsx";

export default function BandRegisterPage() {
  return (
    <div className="page page--centered">
      <div className="page__title">CADASTRO BANDA</div>

      <Header />
      <SectionBar title="BANDA" />

      <BandForm />
    </div>
  );
}