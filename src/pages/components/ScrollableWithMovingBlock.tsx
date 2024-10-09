import React, { useState } from "react";
import { MovingBlock } from "./MovingBlock";

type ComponentProps = {
  children: React.ReactNode;
};

export const ScrollableWithMovingBlock = ({ children }: ComponentProps) => {
  const [position, setPosition] = useState(50);

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.scrollTop);
    // calculate position based on the scrolled value
    const scrollPosition = event.currentTarget.scrollTop;

    setPosition(scrollPosition);
  };

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      <MovingBlock position={position} />
      {children}
    </div>
  );
};
