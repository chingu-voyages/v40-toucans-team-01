import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export default function App() {
  return (
    <div id="navMenu" className="invisible container mx-auto bg-gray-200 rounded-xl shadow border p-8 mt-10vw">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
  );
}