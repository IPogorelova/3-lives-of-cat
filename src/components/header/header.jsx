import { useState } from 'react';

import './header.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <div className="logo">
          🐱
        </div>
        <h1>3 lives of the cat</h1>
      </div>
    </>
  )
}

export default App
