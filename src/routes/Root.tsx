import { Banner } from "../shared/components/banner/Banner";
import { Header } from "../shared/components/header/Header";
import { Overlay } from "../shared/components/overlay/Overlay";
import { useHeaderModal } from "../shared/hooks/useHeaderModal";

export default function Root() {
  console.log("🏠 ~ root was render");
  const { isOpen } = useHeaderModal();

  return (
    <div>
      {/* <Overlay /> */}

      <Banner />
      <Header />

      {isOpen && (
        <div className="fixed inset-0 bg-black/80" style={{ top: 170 }}>
          <div className="h-[400px] animate-translate-init bg-green-600"></div>
        </div>
      )}

      <div className="h-[2000px] bg-blue-900">Scroll section</div>
    </div>
  );
}
