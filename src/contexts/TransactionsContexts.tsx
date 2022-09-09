import React, { createContext, useId, useEffect, useRef, useState, MutableRefObject } from "react";
import { api } from "../lib/axios";

export interface Transaction {
  id: number;
  description: string;
  price: number;
  type: 'income' | 'outcome'
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: MutableRefObject<(query?: string) => Promise<void>>;
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useRef(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query
      }
    })
    setTransactions(response.data)
  })

  useEffect(() => {
    fetchTransactions.current()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions , fetchTransactions}}>
      {children}
    </TransactionContext.Provider>
  )
}
