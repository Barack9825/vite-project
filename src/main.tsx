import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TaskFuncProvider from './Context/TaskFuncProvider'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <TaskFuncProvider>
    <App />
    </TaskFuncProvider>
  </React.StrictMode>
)
