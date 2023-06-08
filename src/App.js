import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Home from './Home';

function App() {
  const [goOn, setGoOn] = useState(false);
  console.log(goOn);
  const handleClick = (e) => {
    console.log(goOn);
    setGoOn(!goOn);
  }

  return goOn ? (<div className='home'>
    <button onClick={handleClick}>GET STARTED</button>
  </div>)
    : (<div><Home /></div>);

  //return <Home />;
    

  {/* <textarea id='srcText' placeholder='הכנס את הטקסט' onChange={handleChange}></textarea>
  <textarea id='destText' value={result}>{result}</textarea>
  <button onClick={handleClick}>הפשט</button> */}
 
}

export default App;

