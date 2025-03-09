const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    CONNECTION_STRING: process.env.CONNECTION_STRING,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET
}