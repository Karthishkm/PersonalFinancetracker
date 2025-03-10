'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import TransactionList from '@/components/TransactionList';
import TransactionForm from '@/components/TransactionForm';
import MonthlyExpensesChart from '@/components/MonthlyExpensesChart';
import CategoryPieChart from '@/components/CategoryPieChart';
import SummaryCards from '@/components/SummaryCards';
import BudgetOverview from '@/components/BudgetOverview';
import BudgetForm from '@/components/BudgetForm';
import { Transaction, Budget } from '@/lib/types';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isBudgetFormOpen, setIsBudgetFormOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const handleAddTransaction = (transaction: Transaction) => {
    if (editingTransaction) {
      setTransactions(transactions.map(t => 
        t.id === editingTransaction.id ? transaction : t
      ));
      setEditingTransaction(null);
    } else {
      setTransactions([...transactions, { ...transaction, id: Date.now().toString() }]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsFormOpen(true);
  };

  const handleAddBudget = (budget: Budget) => {
    setBudgets([...budgets, budget]);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Personal Finance Tracker</h1>
          <div className="flex gap-4">
            <Button 
              onClick={() => setIsBudgetFormOpen(true)}
              variant="outline"
            >
              Set Budget
            </Button>
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-primary hover:bg-primary/90"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Transaction
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <SummaryCards transactions={transactions} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Monthly Expenses</h2>
            <MonthlyExpensesChart transactions={transactions} />
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Expenses by Category</h2>
            <CategoryPieChart transactions={transactions} />
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Budget Overview</h2>
            <BudgetOverview 
              transactions={transactions}
              budgets={budgets}
            />
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
            <TransactionList 
              transactions={transactions}
              onDelete={handleDeleteTransaction}
              onEdit={handleEditTransaction}
            />
          </Card>
        </div>

        <TransactionForm 
          open={isFormOpen}
          onClose={() => {
            setIsFormOpen(false);
            setEditingTransaction(null);
          }}
          onSubmit={handleAddTransaction}
          editingTransaction={editingTransaction}
        />

        <BudgetForm
          open={isBudgetFormOpen}
          onClose={() => setIsBudgetFormOpen(false)}
          onSubmit={handleAddBudget}
          existingBudgets={budgets}
        />
      </div>
    </div>
  );
}