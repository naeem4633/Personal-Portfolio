import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
  <Router>
    <div className="App">
      <div className="App-body">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
