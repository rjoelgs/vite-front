import Header from "./components/Header"
import Home from "./components/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  

  return (
    <>
    <BrowserRouter>
     <Header />
     <div className="container"> 
      <Routes>
        <Route path="/" element = {<Home />} /> 
        <Route path="/contacto" element = {<h1>contacto</h1>} />
        <Route path="/productos" element = {<h1>productos</h1>} />  
      </Routes>
     </div>

    </BrowserRouter>
    </>
  )
}

export default App
