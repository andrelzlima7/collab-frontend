"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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

export const description = "A line chart with a label";

const chartData = [
  { month: "Janeiro", 2023: 186, 2024: 80 },
  { month: "Fevereiro", 2023: 305, 2024: 200 },
  { month: "Março", 2023: 237, 2024: 120 },
  { month: "Abril", 2023: 73, 2024: 190 },
  { month: "Junho", 2023: 209, 2024: 130 },
  { month: "Julho", 2023: 214, 2024: 140 },
  { month: "Agosto", 2023: 220, 2024: 140 },
  { month: "Setembro", 2023: 200, 2024: 14 },
  { month: "Outubro", 2023: 150 },
  { month: "Novembro", 2023: 310 },
  { month: "Dezembro", 2023: 330 },
];

const chartConfig = {
  2023: {
    label: "2023",
    color: "hsl(var(--chart-1))",
  },
  2024: {
    label: "2024",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function FaturamentoBruto() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Faturamento Bruto</CardTitle>
        <CardDescription>2023 e 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="2023"
              type="natural"
              stroke="var(--color-2023)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-2023)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
            <Line
              dataKey="2024"
              type="natural"
              stroke="var(--color-2024)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-2024)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Valor em Milhoes de Reais <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
