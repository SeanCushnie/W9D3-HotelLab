import { useState } from 'react';
import { postBooking } from './BookingService';

const BookingForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        formData["guests"] = {}
        postBooking(formData).then((data) => {
            addBooking(data)
        })
        e.target.reset();
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    };

    return (
        <form className="BookingForm" onSubmit={handleSubmit} method="post">
            <label htmlFor="guestName"> Guest Name </label>
            <input onChange={onChange} type="text" id="guestName" v-model="guestName" required />
            <label htmlFor="guestEmail">Guest Email </label>
            <input onChange={onChange} type="text" id="guestEmail" v-model="guestEmail" required />
            <input type="submit" value="Save" id="save" />
        </form>
    )

}
export default BookingForm