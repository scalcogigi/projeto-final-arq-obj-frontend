
import React from "react";
import Header from "./Header.jsx";
import SectionBar from "./SectionBar.jsx";
import BandForm from "./BandForm.jsx";

export default function BandRegisterPage() {
  return (
    <div className="page page--centered">
      <div className="page__title">CADASTRO BANDA</div>

      <Header />
      {/* você pode mudar o texto se quiser */}
      <SectionBar title="BANDA" />

      <BandForm />
    </div>
  );
}
