import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />


    </Routes>
  );
}

export default App;
