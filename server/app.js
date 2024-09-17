import express from 'express';
import 'express-async-errors';
import config from './config.js'
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

const app = express();

// if (config.NODE_ENV !== 'production') {
//     app.use(morgan('dev'));
// }

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

const port = config.PORT || 4000;

const start = async () => {
    try {
        await connectDB(config.MONGO_URI);
        app.listen(port, () => console.log(`Server listening on port ${port}`));
    } catch (error) {
        console.log("Error connecting to db", error.message);
        process.exit(1)
    }
};

start();
