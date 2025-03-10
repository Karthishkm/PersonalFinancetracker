'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Budget, CATEGORIES } from '@/lib/types';

const formSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  amount: z.number().min(1, 'Amount must be greater than 0'),
});

interface BudgetFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (budget: Budget) => void;
  existingBudgets: Budget[];
}

export default function BudgetForm({ 
  open, 
  onClose, 
  onSubmit,
  existingBudgets,
}: BudgetFormProps) {
  const form = useForm<Budget>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: '',
      amount: 0,
    },
  });

  const availableCategories = CATEGORIES.filter(
    category => !existingBudgets.some(budget => budget.category === category)
  );

  const handleSubmit = (data: Budget) => {
    onSubmit(data);
    form.reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Category Budget</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Amount (₹)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number"
                      value={field.value || ''}
                      onChange={(e) => {
                        const value = e.target.value === '' ? 0 : parseFloat(e.target.value);
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Set Budget</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}