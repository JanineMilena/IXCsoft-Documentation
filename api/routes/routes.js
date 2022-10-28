import dataRenderInterface from '../controllers/interface.controller.js';
import express from 'express';

const router = express.Router();

router.get("/api/menu", dataRenderInterface.getDataMenu);
router.all("/*", (req, res) => {
    res.sendStatus(404);
});

export default router;
