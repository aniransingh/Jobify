import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import morgan from 'morgan';

import connectDB from './db/connect.js';

import authRouter from './routes/authRouter.js';
import jobsRouter from './routes/jobsRouter.js';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authMiddleware from './middleware/auth.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();
const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authMiddleware, jobsRouter);

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();
