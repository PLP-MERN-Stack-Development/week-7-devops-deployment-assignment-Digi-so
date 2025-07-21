import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <span className="text-lg font-semibold">BugTrackr</span>
      <div className="space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
      </div>
    </nav>
  );
}
