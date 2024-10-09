import { useState } from "react";
import ModalDialog from "./components/modal-dialog";
import "../styles/main.css";
import { BunchOfStuff } from "./components/BunchOfStuff";
import { OtherStuffAlsoComplicated } from "./components/OtherStuffAlsoComplicated";
import { SimulatedSlowComponent } from "./components/SimulatedSlowComponent";

function Chapter1() {
  console.log("🚀 ~ rendering chapter1");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="layout">
      <h1>Chapter 1. Intro to re-renders</h1>

      <button onClick={() => setIsOpen(true)}>Open dialog</button>

      {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
      <SimulatedSlowComponent time={500} />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
}

export default Chapter1;
