import { useContext, useMemo } from 'react'
import { TransactionContext } from '../contexts/TransactionsContexts'

export const useSummary = () => {
  const { transactions } = useContext(TransactionContext)

  const summary = useMemo(() => transactions.reduce(
      (acc, transaction) => {
        switch (transaction.type) {
          case 'income':
            acc.income += transaction.price
            acc.total += transaction.price
            break
          case 'outcome':
            acc.outcome += transaction.price
            acc.total -= transaction.price
            break
          default:
            break
        }
        
        return acc
      },
      { income: 0, outcome: 0, total: 0 },
  ), [])

  return summary
}
