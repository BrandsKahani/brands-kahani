import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Franchise from './pages/Franchise'
import Contact from './pages/Contact'
import Founder from "./pages/Founder";
import Profile from "./pages/Profile";

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.45, ease: 'easeOut' }
}

export default function App(){
  const location = useLocation()
  return (
    <div className="font-sans text-black min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/franchise" element={<PageWrapper><Franchise /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

function PageWrapper({children}){
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={{
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -8 }
    }} transition={{ duration: 0.45, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}
