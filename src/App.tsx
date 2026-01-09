import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import Success from './pages/Success';
import Profile from './pages/Profile';
import Prepare from './pages/Prepare';
import Opportunities from './pages/Opportunities';
import ApplicationForm from './pages/ApplicationForm'; // Ise import karein

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/prepare" element={<Prepare />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/apply" element={<ApplicationForm />} /> {/* Naya Route */}
      </Routes>
    </Router>
  );
}

export default App;