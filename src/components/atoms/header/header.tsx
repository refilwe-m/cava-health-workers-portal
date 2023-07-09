import { FC } from "react";

import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({ icon, title }) => {
  return (
    <header className="header text-primary">
      <section className="flex items-center gap-2">
        {icon}
        <h1 className="w-full text-3xl">{title}</h1>
      </section>
      <div className="mt-1 h-0.5 w-20 rounded-sm bg-primary" />
    </header>
  );
};
