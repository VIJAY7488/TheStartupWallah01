const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, CONNECTION_STRING } = require('./config/config');
const authRouter = require('./routes/authRoutes')

const app = express();


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
        'Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'
    ],
    credentials: true
}));


mongoose.connect(CONNECTION_STRING)
.then(() => console.log('DB is connected'))
.catch(error => console.log('Error ' + error));

app.use('/api/auth', authRouter);
app.use('/api/auth', authRouter);
app.use('/api/auth', authRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})