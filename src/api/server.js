import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import router from '../api/routes/routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
console.log('ta funfando')

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST);