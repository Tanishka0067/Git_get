import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import FetchingData from './components/cards.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <FetchingData/>
    <Footer/>
  </React.StrictMode>,
)
