import { Router } from 'express';
import { guestRoutes } from './routes/guestRoute';

const router = Router();

router.use('/guest', guestRoutes());

export default router;