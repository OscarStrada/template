import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
