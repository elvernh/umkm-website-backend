const mongoose = require('mongoose')
const logger = require('../utils/logger')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        logger.info(`MongoDB Connected ${conn.connection.host}`)
        return conn;
    }
    catch(e){
        logger.error(e)
        process.exit(1)
    }
}

module.exports = connectDB