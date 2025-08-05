import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // Optional: remove later if you're not using it

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <div className="flex space-x-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 w-24 hover:scale-110 transition-all" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 w-24 hover:scale-110 transition-all" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold my-6">Vite + React + Tailwind</h1>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500 italic">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
