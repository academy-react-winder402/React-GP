import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from './rout/routes'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const client = new QueryClient()

  return (
    <>
      <QueryClientProvider client={client}>
        <Routes />
      </QueryClientProvider>
    </>
  )
}

export default App
