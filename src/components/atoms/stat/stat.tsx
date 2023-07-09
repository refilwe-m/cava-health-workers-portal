import { FC } from "react";
import { StatProps } from "./types";

export const Stat: FC<StatProps> = ({ icon, title, total, className = "" }) => {
  return (
    <section
      className={`${className} flex items-center justify-start gap-6 rounded-lg bg-gradient-to-l from-secondary to-primary p-4 text-white`}
    >
      {icon}
      <section className="flex flex-col text-xs">
        <h3 className="font-bold">{title}</h3>
        <h6 className="total-value">{total}</h6>
      </section>
    </section>
  );
};
