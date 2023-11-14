import React, { useState, useEffect } from 'react'

function App() {

  const [eventName, setEventName] = useState('');
  const [eventTimeStamp, setEventTimeStamp] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  

  return (
    <div className="createEvent">
      <h2>Enter a new Event</h2>
      <form>
        <label>Enter Event Name:</label>
        <input
          type="text"
          required
          value={eventName}
          onChange={
            (userUpdateEventName) => setEventName(
              userUpdateEventName.target.value)
          }
        />
        <label>Enter Event Time Stamp</label>
        <input
          type="text"
          required
          value={eventTimeStamp}
          onChange={
            (userUpdateEventTimeStamp) => setEventTimeStamp(
              userUpdateEventTimeStamp.target.value)
          }
        />
        <label>Enter Event Description</label>
        <textarea
          required
          value={eventDescription}
          onChange={
            (userUpdateEventDescription) => setEventDescription(
              userUpdateEventDescription.target.value)
          }  
        ></textarea>
        <button>Create Event</button>
      </form>
      
      <p>{eventName}</p>
      <p>{eventTimeStamp}</p>
      <p>{eventDescription}</p>

    </div>
  )
}

export default App