import { useLockBodyScroll } from "@uidotdev/usehooks";

type ComponentProps = {
  children?: React.ReactNode;
};

export const Overlay = ({ children }: ComponentProps) => {
  useLockBodyScroll();

  return (
    <div className="absolute inset-0 bg-black opacity-50 z-[100]">
      {children}
    </div>
  );
};
