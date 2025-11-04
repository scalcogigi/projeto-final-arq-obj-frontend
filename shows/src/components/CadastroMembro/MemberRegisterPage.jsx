import React from "react";
import Header from "../Header/header.jsx";
import SectionBar from "../Homepage/SectionBar.jsx";
import MemberForm from "../CadastroMembro/MemberForm.jsx";

export default function MemberRegisterPage() {
  return (
    <div className="page page--centered page--form">
      <Header />

      <div className="page__content">
        <SectionBar title="MEMBRO" />
        <MemberForm />
      </div>
    </div>
  );
}
