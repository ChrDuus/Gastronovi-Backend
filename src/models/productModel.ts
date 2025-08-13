import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String }, 
    size: { type: String }, 
    options: [{ type: String }] 
});

const Product = model('Product', productSchema);

export default Product;