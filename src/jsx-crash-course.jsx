import React from 'react'

const name='John'
const x = 10;
const y = 20;
const names = ['Alice', 'Bob', 'Charlie']; 
const loggedIn = false;
const styles = {
  color: 'red',
  fontSize: '24px',
};
//<></> is called a fragment basically a ghost element


const App1 = () => {
  return (
    <>
    <div className='text-5xl'>App</div>
    <p style={styles}>Hello {name}</p>
    <p>Sum of {x} and {y} is {x+y}</p>
    <ul>
      {names.map((name,index) => (
        <li key={index}>{name} {index}</li>
      ))}
    </ul>
    {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
   {/* {loggedIn && <h2>Hello Member</h2>} return second if first true */}
    </>
  )
}

export default App1