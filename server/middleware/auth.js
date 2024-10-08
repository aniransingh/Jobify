import jwt from 'jsonwebtoken';
import config from '../config.js'
import { UnauthenticatedError } from '../errors/index.js';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer'))
        throw new UnauthenticatedError('Authentication invalid');

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, config.JWT_SECRET);
        req.user = {userId: payload.userId}
        next();
    } catch (error) {
        console.log(error);
        throw new UnauthenticatedError('Authentication invalid');
    }
};

export default authMiddleware;
