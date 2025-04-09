import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageaaRender />
  </StrictMode>,
)


function PageaaRender(){
  return(
    <>
    {/* <Header /> */}
    <App />
    </>
  )
}
