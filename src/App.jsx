import { Routes, Route } from 'react-router-dom'
import { ContactModalProvider } from './context/ContactModalContext.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ContactModal from './components/ContactModal/ContactModal.jsx'
import Home from './pages/Home/Home.jsx'
import Stock from './pages/Stock/Stock.jsx'

function App() {
  return (
    <ContactModalProvider>
      <div className="eq-app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stock" element={<Stock />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal />
      </div>
    </ContactModalProvider>
  )
}

export default App