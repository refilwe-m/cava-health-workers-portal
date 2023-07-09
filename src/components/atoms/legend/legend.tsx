import { FC } from "react";

export const Legend: FC<{ bgColor: string }> = ({ bgColor }) => {
  return (
    <div
      className="symbol h-3 w-3 rounded-sm"
      style={{ backgroundColor: bgColor }}
    />
  );
};
