import { useEffect, useRef } from "react";

export const Another = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      console.log(container.scrollLeft);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto flex flex-col gap-4">
      <h1>Another</h1>

      <div className="w-full overflow-x-auto" ref={scrollContainerRef}>
        <div className="flex gap-4">
          <div className="min-w-80 h-80 rounded-2xl bg-slate-200"></div>
          <div className="min-w-80 h-80 rounded-2xl bg-green-200"></div>
          <div className="min-w-80 h-80 rounded-2xl bg-blue-200"></div>
          <div className="min-w-80 h-80 rounded-2xl bg-red-200"></div>
          <div className="min-w-80 h-80 rounded-2xl bg-yellow-200"></div>
          <div className="min-w-80 h-80 rounded-2xl bg-purple-200"></div>
          <div className="min-w-80 h-80 rounded-2xl bg-rose-200"></div>
          <div className="min-w-80 h-80 rounded-2xl bg-orange-200"></div>
          <div className="min-w-80 h-80 rounded-2xl bg-gray-200"></div>
          <div className="min-w-80 h-80 rounded-2xl bg-white"></div>
        </div>
      </div>

      <div className="flex gap-4 w-full justify-center ">
        <div
          onClick={scrollLeft}
          className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl"
        >
          &lt;
        </div>
        <div
          onClick={scrollRight}
          className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl"
        >
          &gt;
        </div>
      </div>
    </div>
  );
};
