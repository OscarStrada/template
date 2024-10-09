import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const buttonVariants = cva(
  "flex justify-center items-center rounded-xl hover:bg-[#3272fd] hover:text-white hover:shadow-[8px_8px_36px_0_rgba(0,0,0,0.25)]",
  {
    variants: {
      variant: {
        primary: ["bg-[#121C35]", "text-white"],
        secondary: ["bg-[#f2f3f4]", "text-[#7E8DA8]"],
        ghost: ["bg-transparent"],
      },
      size: {
        default: ["px-4 py-3"],
        icon: ["w-11 h-11"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    asChild?: boolean;
  };

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps) => {
  const Component = asChild ? "span" : "button";

  return (
    <Component
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

Button.displayName = "Button";
