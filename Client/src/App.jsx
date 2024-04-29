import Login from "./Login"
import Signup from "./Signup"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import About from './About'
import Work from './Work'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from "./Navbar";

import "./App.css"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <Home />
            <About  />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
          </div>}>
        </Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App