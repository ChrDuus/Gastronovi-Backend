import { Router } from 'express';
import  ProductController  from '../controllers/productController';

const router = Router();

router.get('/products', ProductController.getProducts);
router.get('/menu-items', ProductController.getProductById);
router.post('/restaurants', ProductController.createProduct);



export default router;