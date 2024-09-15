"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A multiple bar chart";

const chartData = [
  { month: "Janeiro", despesa: 186, faturamento: 80 },
  { month: "Fevereiro", despesa: 305, faturamento: 200 },
  { month: "Março", despesa: 237, faturamento: 120 },
  { month: "Abril", despesa: 73, faturamento: 190 },
  { month: "Maio", despesa: 209, faturamento: 130 },
  { month: "Junho", despesa: 214, faturamento: 140 },
  { month: "Julho", despesa: 214, faturamento: 140 },
  { month: "Agosto", despesa: 214, faturamento: 140 },
];

const chartConfig = {
  despesa: {
    label: "despesa",
    color: "hsl(var(--chart-1))",
  },
  faturamento: {
    label: "faturamento",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function DespesasFaturamento() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Faturamento X Despesas</CardTitle>
        <CardDescription>2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="despesa" fill="var(--color-despesa)" radius={4} />
            <Bar
              dataKey="faturamento"
              fill="var(--color-faturamento)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Comparação entre despesas e faturamento em 2024
        </div>
      </CardFooter>
    </Card>
  );
}
