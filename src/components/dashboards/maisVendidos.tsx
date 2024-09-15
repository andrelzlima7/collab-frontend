"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  {
    produto:
      "Fone de ouvido sem fio, Bluetooth 5.0, com estojo carregador, cor preta",
    desktop: 186,
  },
  {
    produto:
      "Mouse gamer com sensor óptico de alta precisão, 6 botões programáveis, iluminação RGB",
    desktop: 305,
  },
  {
    produto:
      "Teclado mecânico gamer com switches blue, iluminação RGB, teclas anti-ghosting",
    desktop: 237,
  },
  {
    produto:
      "Caixa de som Bluetooth portátil, à prova d água, autonomia de 12 horas, potência de 10W",
    desktop: 73,
  },
  {
    produto:
      "Câmera de segurança Wi-Fi com visão noturna, rotação de 360º, gravação em Full HD",
    desktop: 209,
  },
  {
    produto:
      "Smart TV LED 50 polegadas, resolução 4K, sistema operacional Android TV",
    desktop: 214,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ProdutosMaisVendidos() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Produtos mais vendidos</CardTitle>
        <CardDescription>Ano: 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="produto"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 5) + "..."}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
