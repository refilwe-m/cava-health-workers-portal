import { FC } from "react";
import { TrendProps } from "./types";

export const Trend: FC<TrendProps> = ({ trend, numEnquirers }) => {
  return (
    <section className="flex flex-col">
      <h3 className="font-bold text-sm">{trend}</h3>
      <p className="text-xs">{numEnquirers} enquirers</p>
    </section>
  );
};
