const express = require("express");
const getData = require("../Controller/get");
const postData = require("../Controller/Post");
const router = express.Router();
router.post("/api/postData/api/v4", postData)
router.get("/api/getData/api/v4", getData)
module.exports = router;