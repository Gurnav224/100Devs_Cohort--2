
const mongoose = require('mongoose');

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongodb connected ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}


module.exports = connectDB;