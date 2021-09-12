import express from "express";
import routes from "./routers/index.js";
import cors from "cors";
import "./config/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});
