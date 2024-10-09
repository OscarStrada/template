type ComponentProps = {
  position: number;
};

export const MovingBlock = ({ position }: ComponentProps) => (
  <div className="movable-block" style={{ bottom: position }}>
    {position}
  </div>
);
