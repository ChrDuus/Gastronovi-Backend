import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes); // <-- Hier wird der Router eingebunden

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


mongoose.connect('mongodb+srv://<duus359>:<bXiHZDFARxMn62At>@cluster0.mongodb.net/gastronovi')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// const mongoose = require('mongoose');
// const uri = "mongodb+srv://duus359:bXiHZDFARxMn62At@cluster0.qdwxik7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);
