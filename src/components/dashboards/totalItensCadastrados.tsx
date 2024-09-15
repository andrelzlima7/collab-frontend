"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { grupos: "Celulares", visitors: 275, fill: "var(--color-chrome)" },
  { grupos: "Roupas", visitors: 200, fill: "var(--color-safari)" },
  { grupos: "Utilidades", visitors: 287, fill: "var(--color-firefox)" },
  { grupos: "Ferramentas", visitors: 173, fill: "var(--color-edge)" },
  { grupos: "Papelarias", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Celulares",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Roupas",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Utilidades",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Ferramentas",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Papelarias",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function TotalItensCadastrados() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total de Produtos Ativos</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="grupos"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Aumento de 16,2% em relação ao ano anterior{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
