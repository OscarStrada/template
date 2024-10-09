import { BunchOfStuff } from "./components/BunchOfStuff";
import { OtherStuffAlsoComplicated } from "./components/OtherStuffAlsoComplicated";
import { SimulatedSlowComponent } from "./components/SimulatedSlowComponent";
import ButtonWithModalDialog from "./components/button-with-modal-dialog";

import "../styles/main.css";

function Chapter1() {
  console.log("🚀 ~ rendering chapter1");

  return (
    <div className="layout">
      <h1>Chapter 1. Intro to re-renders</h1>

      <ButtonWithModalDialog />

      <SimulatedSlowComponent time={500} />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
}

export default Chapter1;
