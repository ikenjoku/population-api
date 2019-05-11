import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connect to database
app.use((req, res, next) => {
  return res.status(200).send("Working");
});



// handle routes
export default app;
