
import { useState } from 'react';
import './App.css';



function App() {
  const [age, setAge] = useState('20')
  const [heart, setHeart] = useState('')

  function laske(e){
    e.preventDefault()
    setKilometri(mailit*1.609)
  }
  return (
 
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske}>
      <div>
        <label>Age</label>
        <input value={heart} onChange={e => setMailit(e.target.value)}/>
      </div>
      <div>
      <label>Heart rate limits</label>
      <output>{heart}</output>
      </div>
      <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
