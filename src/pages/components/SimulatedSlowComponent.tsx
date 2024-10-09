import { delay } from "../../utils/delay";

type ComponentProps = {
  time: number;
};

export const SimulatedSlowComponent = ({ time }: ComponentProps) => {
  delay(time);
  return null;
};
