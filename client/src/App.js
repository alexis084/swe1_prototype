import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/events").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof data.events === "undefined") ? (
        <p>Loading...</p>
      ) : (
        data.events.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}

    </div>
  )
}

export default App