import React from "react";
import Header from "./Header.jsx";
import SectionBar from "./SectionBar.jsx";
import MemberForm from "./MemberForm.jsx";

export default function MemberRegisterPage() {
  return (
    <div className="page page--centered">
      {/* título fora do card escuro, como no mock */}
      <div className="page__title">CADASTRO MEMBRO</div>

      <Header />
      <SectionBar title="TourDB" /> {/* se quiser pode trocar por 'MEMBRO' etc */}
      <MemberForm />
    </div>
  );
}
