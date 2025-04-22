import { useState } from "react";
import { BunchOfStuff } from "../../components/BunchOfStuff";
import { OtherStuffAlsoComplicated } from "../../components/OtherStuffAlsoComplicated";
import { SimulatedSlowComponent } from "../../components/SimulatedSlowComponent";
import ModalDialog from "../../components/modal-dialog";
import { useModalDialog } from "../../shared/hooks/useModalDialog";
// import ButtonWithModalDialog from "../../components/button-with-modal-dialog";

function Chapter1() {
  console.log("🚀 ~ rendering chapter1");
  const { isOpen, open, close } = useModalDialog();

  return (
    <div className="layout">
      <h1>Chapter 1. Intro to re-renders</h1>

      {/* <ButtonWithModalDialog /> */}
      <button onClick={open}>Open dialog</button>

      {isOpen ? <ModalDialog onClose={close} /> : null}

      <SimulatedSlowComponent time={500} />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
}

export default Chapter1;
