import { useState } from 'react';

import './header.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <div className="logo">
            🐱
          </div>
          <h1>3 lives of the cat</h1>
        </div>
        <p className="header__easter-egg">
          Алёночка, с днём рождения 🎉💜 <br />
          04.10.2023
        </p>
      </div>
    </>
  )
}

export default App
