import React from "react";
import Header from "../Header/header.jsx";
import SectionBar from "../Homepage/SectionBar.jsx";
import MemberForm from "../CadastroMembro/MemberForm.jsx";

export default function MemberRegisterPage() {
  return (
    <div className="page page--centered">
      <div className="page__title">CADASTRO MEMBRO</div>

      <Header />
      <SectionBar title="TourDB" /> 
      <MemberForm />
    </div>
  );
}
