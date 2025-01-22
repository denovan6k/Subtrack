

import { useState,useMemo } from "react"
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../../components/ui/chart"

// Mock data for different subscription types
const mockData = {
  all: [
    { month: "Jan", value: 15000 },
    { month: "Feb", value: 20000 },
    { month: "Mar", value: 18000 },
    { month: "Apr", value: 25000 },
    { month: "May", value: 30000 },
    { month: "Jun", value: 28000 },
    { month: "Jul", value: 35000 },
    { month: "Aug", value: 82450 },
    { month: "Sep", value: 70000 },
    { month: "Oct", value: 55000 },
    { month: "Nov", value: 45000 },
    { month: "Dec", value: 65000 },
  ],
  premium: [
    { month: "Jan", value: 8000 },
    { month: "Feb", value: 12000 },
    { month: "Mar", value: 10000 },
    { month: "Apr", value: 15000 },
    { month: "May", value: 18000 },
    { month: "Jun", value: 16000 },
    { month: "Jul", value: 20000 },
    { month: "Aug", value: 45000 },
    { month: "Sep", value: 40000 },
    { month: "Oct", value: 35000 },
    { month: "Nov", value: 30000 },
    { month: "Dec", value: 38000 },
  ],
  basic: [
    { month: "Jan", value: 7000 },
    { month: "Feb", value: 8000 },
    { month: "Mar", value: 8000 },
    { month: "Apr", value: 10000 },
    { month: "May", value: 12000 },
    { month: "Jun", value: 12000 },
    { month: "Jul", value: 15000 },
    { month: "Aug", value: 37450 },
    { month: "Sep", value: 30000 },
    { month: "Oct", value: 20000 },
    { month: "Nov", value: 15000 },
    { month: "Dec", value: 27000 },
  ],
}

const periods = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  yearly: "Yearly",
}

const metrics = {
  amount: "Amount",
  users: "Users",
  revenue: "Revenue",
}

export default function AnalyticsDashboard() {
  const [subscriptionType, setSubscriptionType] = useState("all")
  const [metric, setMetric] = useState("amount")
  const [period, setPeriod] = useState("monthly")
 // Memoized total based on subscription type
 const totalValue = useMemo(() => {
  const data = mockData[subscriptionType as keyof typeof mockData]
  return data.reduce((total, item) => total + item.value, 0)
}, [subscriptionType])

// Get the last date (month) from the selected subscription type's data
const lastMonth = useMemo(() => {
  const data = mockData[subscriptionType as keyof typeof mockData]
  return data[data.length - 1]?.month
}, [subscriptionType])
  return (
    <Card className="w-full">
      <CardHeader className="space-y-0 pb-2">
        <CardTitle className=" xl:flex-row  flex flex-col items-center justify-between">
          <span className="text-2xl font-bold">Analytics</span>
          <div className="flex flex-col space-y-2 p-4 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Select value={subscriptionType} onValueChange={setSubscriptionType}>
              <SelectTrigger className=" text-black/60" >
                <SelectValue placeholder="All subscriptions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All subscriptions</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
              </SelectContent>
            </Select>

            <Select value={metric} onValueChange={setMetric}>
              <SelectTrigger className=" text-black/60">
                <SelectValue placeholder="Amount" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(metrics).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className=" text-black/60">
                <SelectValue placeholder="Monthly" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(periods).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
      <div className=" w-full p-4 ">
        <ChartContainer
          config={{
            analytics: {
              label: "Analytics",
              color: "hsl(var(--chart-1))",
            },
          }}
         
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={mockData[subscriptionType as keyof typeof mockData]}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            >
              <XAxis
                dataKey="month"
                stroke="hsl(var(--foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis
                stroke="hsl(var(--foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value >= 1000 ? `${value / 1000}k` : value}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="blue"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 8,
                  fill: "blue",
                }}
               
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        </div>
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{`$${totalValue.toLocaleString()}`}</span>
            <span className="text-xs text-muted-foreground">{`${lastMonth}`}</span>
          </div>
          <span className="text-xs text-blue-500 cursor-pointer">Click to learn more</span>
        </div>
      </CardContent>
    </Card>
  )
}

