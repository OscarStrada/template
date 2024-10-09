import { BunchOfStuff } from "./components/BunchOfStuff";
import { OtherStuffAlsoComplicated } from "./components/OtherStuffAlsoComplicated";
import { SimulatedSlowComponent } from "./components/SimulatedSlowComponent";
import { ScrollableWithMovingBlock } from "./components/ScrollableWithMovingBlock";
import "../styles/main.css";

function Chapter2() {
  console.log("🚀 ~ rendering chapter2");

  return (
    <div>
      <h1>Chapter 2. Elements, children as props, and re-renders</h1>

      <ScrollableWithMovingBlock>
        <SimulatedSlowComponent time={400} />
        <BunchOfStuff />
        <OtherStuffAlsoComplicated />
      </ScrollableWithMovingBlock>
    </div>
  );
}

export default Chapter2;
