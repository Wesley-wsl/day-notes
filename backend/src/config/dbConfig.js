import mongoose from "mongoose";

const dbConfig =
    "mongodb+srv://dbUser:Userdb@cluster0.rpy2o.mongodb.net/annotations?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default connection;
