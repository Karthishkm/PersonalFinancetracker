'use client';

import { Transaction, formatCurrency } from '@/lib/types';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

interface CategoryPieChartProps {
  transactions: Transaction[];
}

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
  '#4CAF50',
  '#FF9800',
  '#9C27B0',
  '#795548',
  '#607D8B',
];

export default function CategoryPieChart({ transactions }: CategoryPieChartProps) {
  const categoryData = transactions.reduce((acc: { name: string; value: number }[], transaction) => {
    const existingCategory = acc.find(item => item.name === transaction.category);
    if (existingCategory) {
      existingCategory.value += transaction.amount;
    } else {
      acc.push({ name: transaction.category, value: transaction.amount });
    }
    return acc;
  }, []);

  return (
    <div className="w-full h-[400px]">
      {transactions.length === 0 ? (
        <div className="h-full flex items-center justify-center text-muted-foreground">
          No data to display
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label={({ name, percent }) => 
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={true}
            >
              {categoryData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [formatCurrency(value), 'Amount']}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}