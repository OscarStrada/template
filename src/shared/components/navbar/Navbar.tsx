import { useHeaderModal } from "../../hooks/useHeaderModal";
import { NavbarItem } from "./NavbarItem";

const LINKS = [
  { label: "Películas", id: "peliculas" },
  { label: "Alimentos", id: "alimentos" },
  { label: "Promos", id: "promos" },
  { label: "Especiales", id: "especiales" },
];

type ComponentProps = {
  children?: React.ReactNode;
  hasScrolledPastThreshold?: boolean;
};

export const Navbar = ({ hasScrolledPastThreshold }: ComponentProps) => {
  const { open, close } = useHeaderModal();

  const handleMouseEnter = () => {
    open();
    console.log("mouseEnter");
  };

  const handleMouseLeave = () => {
    close();
    console.log("mouseLeave");
  };

  return (
    <>
      <ul className="flex flex-1 gap-2">
        {LINKS.map((link) => (
          <NavbarItem
            key={link.id}
            label={link.label}
            variant={"ghost"}
            className={
              hasScrolledPastThreshold ? "text-[#08285B]" : "text-white"
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </ul>
    </>
  );
};
