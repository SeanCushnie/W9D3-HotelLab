use bookings

db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Sean",
        email: "sean@gmail.com",
        checkedIn: false,
        
    },
    {   
        name: "Adam",
        email: "adam@yahoo.com",
        checkedIn: true
    },
    {
        name: "Harv",
        email: "harv@aol.com",
        checkedIn: false
    },
    {
        name: "Kirsty",
        email: "kirsty@hotmail.com",
        checkedIn: false
    }
]);