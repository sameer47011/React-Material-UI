// import logo from './logo.svg';
// import './App.css';
import { Button } from '@mui/material/'
import Layout from './components/Layout/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="*" element={<Pagenotfound/>} />


     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
