import ContactMe from './Pages/ContactMe'
import './App.css'
import Home from './Pages/HomePage'
import Card from './components/Projectcard' 
import About from './Pages/About'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
function App() {
  return (
    <div>
      <NavBar />
      <main className="main-app">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactMe/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </div>
  );
}



export default App;
