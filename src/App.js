import { Route, Routes, Link } from 'react-router-dom';
import { SelectComponent } from "./components/SelectComponent";
import { ButtonComponent } from "./components/ButtonComponent";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import "7.css/dist/7.css";


function App() {

  const appStyle = {
    background: 'hsl(212deg, 50%, 40%)',
    height: '100vh',
    width: '100vw'
  };

  return (
    <div className="App" style={appStyle}>
      
      <nav>
        <ul role="menubar" className=''>
          <li role="menuitem" tabindex="0"><Link to="/">Home</Link></li>
          <li role="menuitem" tabindex="0"><Link to="/about">About</Link></li>
          <li role="menuitem" tabindex="0"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App