import { Request, Response } from 'express';
import Product from '../models/productModel';

class ProductController {
    public async getProducts(req: Request, res: Response): Promise<void> {
    const products = await Product.find();
    res.json(products);
}

    public async getProductById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        res.send(`Details of product with ID: ${id}`);
    }

   public async createProduct(req: Request, res: Response): Promise<void> {
    const productData = req.body;
    const product = new Product(productData);
    await product.save();
    res.status(201).json(product);
}

    public async updateProduct(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const productData = req.body;
        res.send(`Product with ID: ${id} updated`);
    }

    public async deleteProduct(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        res.send(`Product with ID: ${id} deleted`);
    }

    public async getProductsByCategory(req: Request, res: Response): Promise<void> {
    const { category } = req.query;
    const products = await Product.find(category ? { category } : {}).sort({ category: 1, name: 1 });
    res.json(products);
}
}

export default new ProductController();