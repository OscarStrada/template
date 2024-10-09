import { cn } from "../../../utils/cn";

type ComponentProps = {
  className?: string;
  placeholder: string;
};

export const Searchbar = ({ className, placeholder }: ComponentProps) => {
  return (
    <div
      className={cn(
        `flex justify-between items-center  rounded-xl w-72 p-3`,
        className
      )}
    >
      {placeholder}
    </div>
  );
};
