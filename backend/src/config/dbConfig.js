import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const dbConfig = process.env.REACT_APP_MONGODB_URI;

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default connection;
