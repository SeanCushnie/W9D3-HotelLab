const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(express.json());
app.use(cors())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
    const db = client.db('hotel_bookings');
    const gamesCollection = db.collection('bookings');
    const gamesRouter = createRouter(bookingsCollection);
    app.use('/api/games', bookingsRouter);

})
.catch(console.error); 


app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});