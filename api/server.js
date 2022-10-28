import router from '../api/routes/routes.js';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(router);

console.log('Server started..')

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST);