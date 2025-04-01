import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login'; // Import the Login component

function App() {
  return (
    <Router>
      <div className="app">
        {/* Conditionally render the Header */}
        <ConditionalHeader />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Checkout Page */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

// Component to conditionally render the Header
function ConditionalHeader() {
  const location = useLocation();

  // Render the Header only on "/" (Home) and "/checkout" routes
  if (location.pathname === "/" || location.pathname === "/checkout") {
    return <Header />;
  }
  return null; // Do not render the Header on other routes
}

export default App;
