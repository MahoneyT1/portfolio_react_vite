import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from "./assets/components/Main"
import Navbar from './assets/components/Navbar/Navbar'
import Footer from './assets/components/Footer/Footer'




function App() {

  
  
    return (
      <div className="bg-primary ">
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    )
}

export default App;
