const router = require("./routes/routes")
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000
//Allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router)
app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));