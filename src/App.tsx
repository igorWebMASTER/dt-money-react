import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContexts'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <TransactionsProvider>
      <ThemeProvider theme={defaultTheme}>
        <Transactions />
        <GlobalStyle />
      </ThemeProvider>
    </TransactionsProvider>
  )
}

export default App
