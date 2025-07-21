// src/register.jsx

import React from 'react';

function Register() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Register Page</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Username" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Register</button>
      </form>
    </div>
  );
}

export default Register;
