import { Request, Response } from 'express';
import Product from '../models/productModel';
import order from '../models/orderModel'

class OrderController {
    public async getOrders(req: Request, res: Response): Promise<void> {
    const orders = await order.find();
    res.json(orders);
}

    public async getOrderByNumber(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        res.send(`Details of product with ID: ${id}`);
    }

   public async createOrder(req: Request, res: Response): Promise<void> {
    const productData = req.body;
    const product = new Product(productData);
    await product.save();
    res.status(201).json(product);
}

   
}

export default new OrderController();