const BookingCard = ({ booking, deleteBooking }) => {
    return (
        <>
            <h1> {booking.name}</h1>
            <p> {booking.email}</p>
        </>
    )
}

export default BookingCard