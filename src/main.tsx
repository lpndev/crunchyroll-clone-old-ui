import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import Footer from './components/footer'
import Header from './components/header'
import Home from './home'
import './styles/globals.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
      <Footer />
    </QueryClientProvider>
  </StrictMode>,
)
