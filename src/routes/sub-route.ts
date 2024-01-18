import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello from sub-route');
});

export default router;