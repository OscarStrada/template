import CustomButton from "./components/custom-button/custom-button";
import Icons from "./components/icons";

function Chapter3() {
  console.log("🚀 ~ rendering chapter2");

  return (
    <div>
      <h1>Chapter 3. Configuration concerns with elements as props</h1>

      <CustomButton appearance="primary" icon={<Icons.spinner />} />
      <CustomButton appearance="secondary" icon={<Icons.warning />} />
    </div>
  );
}

export default Chapter3;
