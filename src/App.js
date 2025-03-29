import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header is displayed on all pages */}
        <Header />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Checkout Page */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
