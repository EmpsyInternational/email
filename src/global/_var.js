require('dotenv').config();

const PORT = process.env.PORT

const NAME  = process.env.NAME
const USER = process.env.USER
const PASS = process.env.PASS
const HOST = process.env.HOST

const SAVE  = process.env.SAVE

module.exports = {
    PORT,
    NAME,
    USER,
    PASS,
    HOST,
    SAVE 
 };
