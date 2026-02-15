import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Accounts from './pages/Accounts'
import Services from './pages/Services'
import Footer from './components/Footer'
import ComponentA from './pages/ComponentA'

function App () {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>

          <Route path='/contact' element={<Contact/>}>
            <Route path='accounts' element={<Accounts/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path='/propsdrilling' element={<ComponentA/>} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
