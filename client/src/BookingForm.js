import { useState } from 'react';
import { postBooking } from './BookingService';

const BookingForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({checked_in: false});

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = formData["guestName"]
        const email = formData["guestEmail"]
        const checked_in = e.target[2].checked
        console.log(name)
        console.log(email)
        console.log(checked_in)
        addBooking({
            name: name,
            email: email,
            checkedIn: checked_in
        })
        
    }

    const onChange = (e) => {
        if (e.target.id == "checked_in") {
            formData["checked_in"] = e.target.checked
            // console.log(e.target.checked)
            setFormData(formData);
            // console.log(formData);
        }
        else {
            formData[e.target.id] = e.target.value;
            setFormData(formData);
        }
        
    };

    return (
        <form className="BookingForm" onSubmit={handleSubmit} method="post">
            <label htmlFor="guestName"> Guest Name </label>
            <input onChange={onChange} type="text" id="guestName" v-model="guestName" required />
            <label htmlFor="guestEmail">Guest Email </label>
            <input onChange={onChange} type="text" id="guestEmail" v-model="guestEmail" required />
            <input onChange={onChange} type="checkbox" id="checked_in" name="checked_in" value="checked_in" />
            <label htmlFor="checked_in"> Checking in? </label>
            <input type="submit" value="Save" id="save" />
        </form>
    )

}
export default BookingForm