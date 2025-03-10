export interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: Date;
  category: string;
}

export interface TransactionFormData {
  amount: number;
  description: string;
  date: Date;
  category: string;
}

export interface Budget {
  category: string;
  amount: number;
}

export const CATEGORIES = [
  'Housing & Rent',
  'Groceries',
  'Transportation',
  'Utilities',
  'Healthcare',
  'Entertainment',
  'Shopping',
  'Education',
  'Savings',
  'Investments',
  'Insurance',
  'Restaurant & Dining',
  'Personal Care',
  'Home Maintenance',
  'Travel',
  'Gifts & Donations',
  'Electronics',
  'Vehicle Maintenance',
  'Professional Services',
  'Other'
] as const;

export type Category = typeof CATEGORIES[number];

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};