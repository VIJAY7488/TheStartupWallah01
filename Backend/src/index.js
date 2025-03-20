const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, CONNECTION_STRING } = require('./config/config');
const path = require('path');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes')

const app = express();

const _dirname = path.resolve();

app.use(express.json());
app.use(cors({
    origin: 'https://www.thestartupwallah.com',
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
app.use('/api/user/', userRouter);


app.use(express.static(path.join(_dirname, "/TheStartupWallah/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "TheStartupWallah", "dist", "index.html"));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})