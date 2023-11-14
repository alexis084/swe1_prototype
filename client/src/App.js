import React, { useState, useEffect } from 'react'

function App() {

  const [eventName, setEventName] = useState('');
  const [eventTimeStamp, setEventTimeStamp] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventData, setEventData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { eventName, eventTimeStamp, eventDescription }

    fetch('http://127.0.0.1:5000/events', {
      method: 'POST',
      headers: { 'Content-Type': "application/json"},
      body: JSON.stringify(event),
    }).then((response) => response.json())
      .then(data => {
        setEventData(data)
        console.log(data)
      })
  }

  const displayEventData = () => {
    if (!eventData) {
      return null
    }

    console.log("in display event data showing event name:", eventData.eventName)

    return (
      <div>
        <h2>New Event:</h2>
        <p>Name: {eventData.eventName}</p>
        <p>Timestamp: {eventData.eventTimeStamp}</p>
        <p>Description: {eventData.eventDescription}</p>
      </div>
    )
  }
  
  return (
    <div className="createEvent">
      <h2>Enter a new Event</h2>
      <form onSubmit={handleSubmit}>
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

      {displayEventData()}
    </div>
  )
}

export default App