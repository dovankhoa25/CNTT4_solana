import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Web3ReactProvider, Web3ReactHooks } from '@web3-react/core'
import { Connector } from '@web3-react/types'

import allConnections from './connect/connectors.ts'
import { BrowserRouter } from 'react-router-dom'
const connections: [Connector, Web3ReactHooks][] = allConnections.map(([connector, hooks]) => [connector, hooks])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Web3ReactProvider connectors={connections}>
  <React.StrictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </React.StrictMode>,
  </Web3ReactProvider>
)
