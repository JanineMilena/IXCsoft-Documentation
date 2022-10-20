const express = require("express");
const { dataRenderInterface } = require("../controllers/interface.controller");
const { exampleRequest } = require("../controllers/exampleRequest.controller");

const router = express.Router();

router.get("/api/menu", dataRenderInterface.getDataMenu);

router.get("/example/request/:table", exampleRequest);

router.all("/*", (req, res) => {
    res.sendStatus(404);
});

module.exports = { router };
