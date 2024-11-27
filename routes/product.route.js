import { Router } from 'express';
import {getProducts, getProduct, addProduct, updateProduct, deleteProduct} from '../controllers/product.controllers.js';

const router = Router();

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', addProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


export default router;

