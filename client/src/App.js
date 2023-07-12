import logo from './logo.svg';
import './App.css';
import BookingGrid from './BookingList'
import BookingForm from './BookingForm';


import React, { useState, useEffect } from 'react';

function App() {

  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9000/api/bookings")
      .then((data) => data.json())
      .then(response => setBookings(response))
  }, []);

  const addBooking = (booking) => {
    fetch("http://localhost:9000/api/bookings", {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: { 'Content-Type': "application/json" }
    })
      .then(res => res.json())

  }

  // const deleteBooking = (id) => {
  //   .then(() => {
  //     let temp = booking.map(b=>b);
  //     const to
  //   })
  // }

  if (!bookings) {
    return (<h1> loading...</h1>)
  }


  return (
    <>
      <div className="App">
        <h1> hello world</h1>
        <BookingForm addBooking={addBooking}/>
        <BookingGrid bookings={bookings} />

      </div>
    </>
  );
}

export default App;
