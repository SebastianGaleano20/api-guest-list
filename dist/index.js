import { Router } from 'express';
import { guestRoutes } from './routes/guestRoute';
import { adminRoutes } from './routes/adminRoute';
const router = Router();
router.use('/guest', guestRoutes());
router.use('/admin', adminRoutes());
export default router;
