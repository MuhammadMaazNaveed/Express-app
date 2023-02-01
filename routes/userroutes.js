const express = require("express");
const router = express.Router();
const path = require("path");
const pages = require("../controller/user");

router.get("/", pages.homepage);
router.get("/services", pages.servicePage);
router.get("/about", pages.aboutPage);
module.exports = router;
