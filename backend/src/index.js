import express from "express";
import routes from "./routers/index.js";
import "./config/dbConfig.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});
