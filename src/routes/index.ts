import express from 'express';
import subRoute from './sub-route'
const router = express.Router();

router.use('/sub', subRoute);

export { router };