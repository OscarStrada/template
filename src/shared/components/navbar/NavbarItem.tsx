import { cn } from "../../../utils/cn";
import { Button } from "../button/Button";

type ComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export const NavbarItem = ({
  label,
  variant,
  className,
  ...props
}: ComponentProps) => {
  return (
    <li>
      <Button
        variant={variant}
        className={cn("font-extrabold", className)}
        {...props}
      >
        {label}
      </Button>
    </li>
  );
};
