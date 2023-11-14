import React, { useState, useEffect } from 'react'

function App() {

  const [eventName, setEventName] = useState('');
  const [eventTimeStampe, setEventTimeStamp] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  

  return (
    <div className="createEvent">
      <h2>Enter a new Event</h2>
      <form>
        <label>Enter Event Name:</label>
        <input
          type="text"
          required
        />
        <label>Enter Event Time Stamp</label>
        <input
          type="text"
          required
        />
        <label>Enter Event Description</label>
        <textarea
          required  
        ></textarea>
        <button>Create Event</button>
      </form>
    </div>
  )
}

export default App