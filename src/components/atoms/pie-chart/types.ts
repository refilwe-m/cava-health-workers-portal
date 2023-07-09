export type PieChartProps = {
  data: PieChartData[];
  colors: string[];
};

export type PieChartData = {
  topic: string;
  percent: number;
};

export type TooltipProps = {
  payload?: {
    payload: {
      topic: string;
      percent: number;
    };
  }[];
};
