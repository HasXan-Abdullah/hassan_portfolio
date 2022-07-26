import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact Us/Contact';

import HashLoader from "react-spinners/HashLoader";
import GridLoader from "react-spinners/GridLoader";
import React,{useEffect,useState,} from 'react';

function App() {
  //loading screen
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
    
  }, []);
  //defining routes paths
  return  <div className='App'>
{
  loading ?
  <div className='spinners'> <GridLoader
  color={"#EEBA30"} loading={loading} size={10} />
  <HashLoader
  color={"#EEBA30"} loading={loading} size={50} />
  <GridLoader
  color={"#EEBA30"} loading={loading} size={10} />
  
  </div>
  
 :
  <Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   
    
  </Routes>
  <Footer/>
</Router>
}
  </div>
  
 
    
  
}

export default App;
