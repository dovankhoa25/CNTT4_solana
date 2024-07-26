import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Web3ReactProvider, Web3ReactHooks } from '@web3-react/core'
import { Connector } from '@web3-react/types'

import allConnections from './connect/connectors.ts'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const connections: [Connector, Web3ReactHooks][] = allConnections.map(([connector, hooks]) => [connector, hooks])
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Web3ReactProvider connectors={connections}>
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
   <BrowserRouter>
    <ToastContainer />
    <App />
   </BrowserRouter>
  </React.StrictMode>,
  </QueryClientProvider>
  </Web3ReactProvider>
)