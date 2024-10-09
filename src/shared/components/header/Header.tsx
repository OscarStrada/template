import { Search, UserRound } from "lucide-react";
import { useScroll } from "../../hooks/useScroll";
import { Navbar } from "../navbar/Navbar";
import { NavbarItem } from "../navbar/NavbarItem";
import { Logo } from "../logo/Logo";
import { Searchbar } from "../searchbar/Searchbar";
import { Button } from "../button/Button";

export const Header = () => {
  console.log("🤔 ~ rendering header at scroll position", window.scrollY);
  const hasScrolledPastThreshold = useScroll(63.5);

  // const handleClick = () => {
  //   if (isModalActive) {
  //     setIsModalActive(false);
  //     setTimeout(() => {
  //       setIsModalActive(true);
  //     }, 0);
  //   } else {
  //     setIsModalActive(true);
  //   }
  // };

  // const handleMouseEnter = () => {
  //   console.log("mouseEnter event");
  //   setIsModalActive(true);
  // };

  // const handleMouseLeave = () => {
  //   console.log("mouseLeave event");
  //   setIsModalActive(false);
  // };

  return (
    <div
      className={`${
        hasScrolledPastThreshold ? "bg-[#ffffff]" : "bg-[#05102A]"
      } p-8 sticky top-0 flex justify-between items-center z-50`}
    >
      {/* Navbar */}
      <Navbar hasScrolledPastThreshold={hasScrolledPastThreshold} />

      {/* Logo */}
      <Logo isDark={hasScrolledPastThreshold} />

      {/* Searchbar and user actions */}
      <div className="flex-1 flex justify-end items-center gap-2">
        <Searchbar
          className={
            hasScrolledPastThreshold
              ? "bg-[#f2f3f4] text-[#08285B]"
              : "bg-[#121C35] text-white"
          }
          placeholder="Elige un cine"
        />

        <Button
          variant={hasScrolledPastThreshold ? "secondary" : "primary"}
          size={"icon"}
        >
          <Search size={18} strokeWidth={2.4} />
        </Button>

        <Button
          variant={hasScrolledPastThreshold ? "secondary" : "primary"}
          size={"icon"}
        >
          <UserRound size={18} strokeWidth={2.4} />
        </Button>

        {/* {isModalActive && (
          <div className="fixed inset-0 bg-black/80" style={{ top: 170 }}>
            <div className="h-[400px] animate-translate-init bg-green-600"></div>
          </div>
        )} */}
      </div>
    </div>
  );
};
