import React from 'react';
import BookingCard from "./BookingCard";

const BookingList = ({ bookings }) => {

    const bookingsList = bookings.map((booking, index) => {
        return (
            <BookingCard key={index} booking={booking}
            // deleteBooking={deleteBooking} 
            />
        )
    })

    return (
        <>
            {bookingsList}
        </>
    )
}

export default BookingList;