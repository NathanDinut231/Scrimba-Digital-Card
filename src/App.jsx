import { useState } from 'react';
import me from './assets/c-me.jpg';
import MainContent from './MainContent.jsx';


import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br />
      <div className="card-container">
        <div className="img-container">
          <img src={me} className="logo react" alt="React logo" />
          </div>
          <MainContent />
          
     

      </div>
    </>
  )
}

export default App
