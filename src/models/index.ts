import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    cuisine: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
});

const menuItemSchema = new Schema({
    restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
});

const Restaurant = model('Restaurant', restaurantSchema);
const MenuItem = model('MenuItem', menuItemSchema);

export { Restaurant, MenuItem };