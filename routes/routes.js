const express = require("express");
const Data = require("../Controller/data");
const getData = require("../Controller/get");
const postData = require("../Controller/Post");
const router = express.Router();
router.post("/api/postData/api/v4", postData)
router.get("/api/getData/api/v4", getData)
router.get("/api/Data/api/v4", Data)
module.exports = router;