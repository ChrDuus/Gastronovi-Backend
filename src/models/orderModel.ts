import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
    orderNumber: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    dateAndTime: { type: String, required: true },
    orderProducts: [  {type: Schema.Types.ObjectId, ref: 'Product', required: true} ], 
    paymentMethod: { type: String, required: true }, 
    status: {type: String, required : true} 
});

const order = model('Order', orderSchema);

export default order;