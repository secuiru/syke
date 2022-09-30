
import { useState } from 'react';
import './App.css';



function App() {
  const [age, setAge] = useState('20')
  const [heart, setHeart] = useState(0)
  const [heartlower,setlower] = useState(0)

  function laske(e){
    e.preventDefault()
    setHeart(220-age*0.65)
    setlower(220-age*0.85)
  }
  return (
 
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske}>
      <div>
        <label>Age</label>
        <input value={age} onChange={e => setAge(e.target.value)}/>
      </div>
      <div>
      <label>Heart rate limits</label>
      <output>{heartlower.toFixed(0)}-{heart.toFixed(0)}</output>
      </div>
      <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
