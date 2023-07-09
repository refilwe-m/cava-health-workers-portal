import { FC } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { PieChartProps, TooltipProps } from "./types";
import { Legend } from "..";

export const PieChartGraph: FC<PieChartProps> = ({ data, colors }) => {
  const fills = colors;

  const CustomTooltip: FC<TooltipProps> = ({ payload }) => {
    if (payload && payload.length) {
      const { topic, percent } = payload[0].payload;
      return (
        <div className="custom-tooltip flex flex-col rounded-2xl border p-2 opacity-70 shadow-sm drop-shadow-sm focus:border">
          <h1 className="text-center font-extralight text-black">{`${topic}: ${percent.toFixed(
            2
          )}%`}</h1>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="pie-chart grid place-items-center gap-2 text-[#748AA1] md:grid-cols-2 lg:flex-row lg:items-center">
      <div style={{ width: 400, height: 300 }}>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              dataKey="percent"
              innerRadius={50}
              outerRadius={95}
            >
              {data.map((entry, index) => {
                return <Cell key={`cell-${index}`} fill={fills[index]} />;
              })}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <section className="pie-legend flex gap-10 font-light">
        <div className="symbols">
          <h3 className="text-sm font-light text-[#8D8D8D]">Symbol</h3>
          {data.map(({ topic }, index) => (
            <div key={topic} className="flex items-center gap-2">
              <Legend bgColor={fills[index]} />
              <span className="text-xs">{topic}</span>
            </div>
          ))}
        </div>
        <div className="percentiles">
          <h3 className="text-sm font-light text-[#8D8D8D]">Percentage</h3>
          {data.map(({ percent }, index) => (
            <p className="text-xs" key={index}>
              {percent.toFixed(2)}%
            </p>
          ))}
        </div>
      </section>
    </section>
  );
};
