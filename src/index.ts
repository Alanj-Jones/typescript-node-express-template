import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './routes';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', router);

// mongoose.connect(process.env.MONGO_URI!)
//     .then(()=>{console.log('Connected to the DB');})
//     .catch((err)=>{console.log(`Error: ${err}`);});

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running → ${process.env.PORT}`);
});
