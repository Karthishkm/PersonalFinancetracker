'use client';

import { Transaction, Budget, formatCurrency } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface BudgetOverviewProps {
  transactions: Transaction[];
  budgets: Budget[];
}

export default function BudgetOverview({ transactions, budgets }: BudgetOverviewProps) {
  const categorySpending = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {budgets.map((budget) => {
        const spent = categorySpending[budget.category] || 0;
        const percentage = Math.min((spent / budget.amount) * 100, 100);
        const isOverBudget = spent > budget.amount;

        return (
          <Card key={budget.category} className={isOverBudget ? 'border-destructive' : ''}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{budget.category}</CardTitle>
              <span className="text-sm font-medium">
                {formatCurrency(spent)} / {formatCurrency(budget.amount)}
              </span>
            </CardHeader>
            <CardContent>
              <Progress 
                value={percentage} 
                className={isOverBudget ? 'bg-destructive/20' : ''}
              />
              {isOverBudget && (
                <Alert variant="destructive" className="mt-2">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Over budget by {formatCurrency(spent - budget.amount)}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        );
      })}

      {budgets.length === 0 && (
        <div className="text-center text-muted-foreground">
          No budgets set. Add a budget to start tracking your spending.
        </div>
      )}
    </div>
  );
}