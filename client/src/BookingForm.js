
const BookingForm = ({ addBooking }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.guestName.value
        const email = e.target.guestEmail.value
        const checked_in = e.target.checked_in.checked
        addBooking({
            name: name,
            email: email,
            checkedIn: checked_in
        })
        e.target.reset();
    }

    return (
        <form className="BookingForm" onSubmit={handleSubmit} method="post">
            <label htmlFor="guestName"> Guest Name </label>
            <input type="text" id="guestName" v-model="guestName" required />
            <label htmlFor="guestEmail">Guest Email </label>
            <input type="text" id="guestEmail" v-model="guestEmail" required />
            <input type="checkbox" id="checked_in" name="checked_in" value="checked_in" />
            <label htmlFor="checked_in"> Checked in? </label>
            <input type="submit" value="Save" id="save" />
        </form>
    )

}
export default BookingForm;