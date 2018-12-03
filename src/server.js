import path from 'path';
import express from 'express';
import router from './routes/router';
import cors from 'cors';
import dotenv from 'dotenv';
import zip from 'express-zip';

// Create express app
const app = express();

// Configure dotenv
dotenv.config();

// Enable cors
app.use(cors('*'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Public directory for static files
app.use('/', express.static(path.join(__dirname, '../client')));

// Router
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
