import { useState } from 'react'


function App() {

  const [count,countfn] = useState(0);
   const up =() =>{ 
    countfn(count + 1);       
   }

  return (
    <>
      <div id='count'>
        <h1 id='pressed'>{count}</h1>
        <button name="countUP" onClick={up}>count</button>
      </div>
    </>
  )
}

export default App
