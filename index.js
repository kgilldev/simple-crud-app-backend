import express from 'express';
import mongoose from 'mongoose';
import router from './routes/product.route.js';

const app = express()

app.use(express.json());
app.use("/api/products", router);

app.get("/", (req, res) => {
    res.send('Hello from Node API Server');
});


await mongoose.connect('mongodb+srv://karanveerkgill:trNXDz17GhAMQd5R@backenddb.bdmny.mongodb.net/Node-Project?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log("Connected to MongoDB DB!")
    app.listen(3000, () => {
    console.log("Server is listening at 3000")
    })
})
.catch((err) => {
    console.log(`Connection Failed: ${err}`)
});


