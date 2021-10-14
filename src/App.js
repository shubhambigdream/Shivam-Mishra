import React, { useState,useEffect }from 'react'

 const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  
  const addUser = () => {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        age:age 
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log('error'))
  }
  


  return (
    <div>
      <label>Name</label>
      <input type="text" onChange={e => setName(e.target.value)}></input>
      <br/>
      <label>age</label>
      <input type="text" onChange={e => setAge(e.target.value)}></input>
      <input type="submit" onClick={()=>addUser()}></input>
    </div>
  )
}

export default App;