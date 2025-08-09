import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Onboarding } from './components/Onboarding';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
