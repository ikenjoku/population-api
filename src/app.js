import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import modules from './modules';


dotenv.config();
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// handle 404 error
app.use((req, res, next) => {
  const pageNotFound = new Error('There is no page here');
  pageNotFound.status = 404;
  next(pageNotFound);
});
// handle routes
modules(app);

export default app;
