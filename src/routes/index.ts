import { Router } from 'express';
import { YourController } from '../controllers/index';

const router = Router();

router.get('/restaurants', YourController.getRestaurants);
router.get('/menu-items', YourController.getMenuItems);
router.post('/restaurants', YourController.createRestaurant);
router.post('/menu-items', YourController.createMenuItem);

export default router;