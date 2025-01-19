import { useState,useMemo } from "react";

import { Label, Pie, PieChart } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";

const COLORS = {
  productivity: "hsl(217, 91%, 60%)",  // Blue
  entertainment: "hsl(271, 91%, 65%)", // Purple
  security: "hsl(217, 91%, 85%)",      // Light Blue
  insurance: "hsl(224, 76%, 48%)",     // Dark Blue
  logistics: "hsl(168, 84%, 48%)",     // Green
};

const chartData = [{
  monthly: [
    { name: "Productivity", value: 2450, fill: COLORS.productivity },
    { name: "Entertainment", value: 1200, fill: COLORS.entertainment },
    { name: "Security", value: 800, fill: COLORS.security },
    { name: "Insurance", value: 1500, fill: COLORS.insurance },
    { name: "Logistics", value: 950, fill: COLORS.logistics },
  ],
  quarterly: [
    { name: "Productivity", value: 7350, fill: COLORS.productivity },
    { name: "Entertainment", value: 3600, fill: COLORS.entertainment },
    { name: "Security", value: 2400, fill: COLORS.security },
    { name: "Insurance", value: 4500, fill: COLORS.insurance },
    { name: "Logistics", value: 2850, fill: COLORS.logistics },
  ],
  yearly: [
    { name: "Productivity", value: 29400, fill: COLORS.productivity },
    { name: "Entertainment", value: 14400, fill: COLORS.entertainment },
    { name: "Security", value: 9600, fill: COLORS.security },
    { name: "Insurance", value: 18000, fill: COLORS.insurance },
    { name: "Logistics", value: 11400, fill: COLORS.logistics },
  ]
}];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  productivity: {
    label: "Productivity",
    color: "hsl(var(--chart-1))",
  },
  entertainment: {
    label: "Entertainment",
    color: "hsl(var(--chart-2))",
  },
  security: {
    label: "Security",
    color: "hsl(var(--chart-3))",
  },
  insurance: {
    label: "Insurance",
    color: "hsl(var(--chart-4))",
  },
  logistics: {
    label: "Logistics",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

function PieCharts() {
  const [period, setPeriod] = useState("monthly");
  const totalValue = useMemo(() => {
    return chartData[0][period as keyof typeof chartData[0]].reduce((acc, item) => acc + item.value, 0);
  }, [period]);
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="flex justify-between items-center pb-0">
        <CardTitle>Category</CardTitle>
        <CardDescription>
          <div className="flex flex-col space-y-2 p-4 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Monthly" />
              </SelectTrigger>
              <SelectContent>
                {["monthly", "quarterly", "yearly"].map((key) => (
                  <SelectItem key={key} value={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardDescription>
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
              data={chartData[0][period as keyof typeof chartData[0]]}
              dataKey="value"
              nameKey="name"
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
                          className="fill-foreground text-2xl font-bold"
                        >
                         {totalValue} {/* Insert dynamic content here */}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                         Platform
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className=" flex flex-col items-start gap-2 text-sm">
        <ul className="flex items-center  gap-2 ">
            <li className="flex  items-center gap-2">
               <hr className={`h-3 w-3  rounded-full bg-[#3469eb]`}/>
               Productivity
            </li>
            <li className="flex  items-center gap-2">
               <hr className={`h-3 w-3  rounded-full bg-[#b44cfe]`}/>
               Entertainment
            </li>
         
         
        </ul>
        <ul className="flex items-center flex-wrap  gap-2 ">
            <li className="flex  items-center gap-2">
               <hr className={`h-3 w-3  rounded-full bg-[#b3cbff]`}/>
               Security
            </li>
            <li className="flex  items-center gap-2">
               <hr className={`h-3 w-3  rounded-full bg-[#2459d9]`}/>
               Insurance
            </li>
            <li className="flex  items-center gap-2">
               <hr className={`h-3 w-3  rounded-full bg-[#19c387]`}/>
               Logistics
            </li>

         
         
        </ul>
      </CardFooter>
    </Card>
  );
}
export default PieCharts;