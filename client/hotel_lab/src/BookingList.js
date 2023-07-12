import BookingCard from "./BookingCard";

const BookingGrid = ({bookings}) => {
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
        {/* <p> Melon</p> */}
        </>
    )
}

export default BookingGrid;