import { ReactElement, useState } from "react";
import "./custom-button.css";

enum Color {
  White = "white",
  black = "black",
}

type DefaultProps = {
  size: number;
  color: "white" | "black";
};

type StateProps = {
  isHovered: boolean;
};

type CustomButtonProps = {
  renderIcon: (props: DefaultProps, state: StateProps) => ReactElement;
  appearance?: "primary" | "secondary";
  size?: "large" | "medium";
};

function CustomButton({ appearance, size, renderIcon }: CustomButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  // create default props as before
  const iconParams = {
    size: size === "large" ? 30 : 24,
    color: appearance === "primary" ? Color.White : Color.black,
  };

  return (
    <button
      className="custom-button"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      Submit {renderIcon(iconParams, { isHovered })}
    </button>
  );
}

export default CustomButton;
