import express from 'express';
import subRoute from './sub-route'
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from root route.');
});

router.use('/sub', subRoute);

export { router };