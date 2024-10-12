import { cloneElement, ReactElement } from "react";
import "./custom-button.css";

type CustomButtonProps = {
  icon: ReactElement;
  appearance?: "primary" | "secondary";
  size?: "large" | "medium";
};

function CustomButton({ icon, appearance, size }: CustomButtonProps) {
  const defaultIconProps = {
    size: size === "large" ? 30 : 24,
    color: appearance === "primary" ? "white" : "black",
  };

  const newProps = {
    ...defaultIconProps,
    ...icon.props,
  };

  const clonedIcon = cloneElement(icon, newProps);

  return <button className="custom-button">Submit {clonedIcon}</button>;
}

export default CustomButton;
