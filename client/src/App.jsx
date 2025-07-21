import { Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
import Register from './register.jsx'; // spelling corrected below
import Dashboard from './dashboard.jsx';
import Navbar from './navbar.jsx';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}


export default App;
