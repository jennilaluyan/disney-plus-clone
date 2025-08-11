import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Onboarding } from './components/Onboarding';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
