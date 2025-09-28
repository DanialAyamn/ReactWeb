import ContactMe from './Pages/ContactMe'
import './App.css'
import Home from './Pages/HomePage'
import Card from './components/Projectcard' 
import About from './Pages/About'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
      
      <ScrollToTop />
      <NavBar />
      <main className="main-app">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactMe/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </>
  );
}



export default App;
