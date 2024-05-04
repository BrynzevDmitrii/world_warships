import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.module.scss'
import { ApolloProvider } from '@apollo/client'
import client from'./apollo/client'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={ client }  >
      <Provider store={store}> 
          <App />
      </Provider>
    </ApolloProvider>
    
  </React.StrictMode>,
)
