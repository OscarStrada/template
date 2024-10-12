import { ReactElement } from "react";
import "./custom-button.css";

type CustomButtonProps = {
  renderIcon: () => ReactElement;
};

function CustomButton({ renderIcon }: CustomButtonProps) {
  return <button className="custom-button">Submit {renderIcon()}</button>;
}

export default CustomButton;
