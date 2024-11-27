import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const getProductWithId = await Product.findById(id);
        res.status(200).json(getProductWithId);
    } catch (error) {
        res.status(500).json({message:error});  
    } 
};

export const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body);

        if (!updateProduct) {
            return res.status(404).json({message: "Product not found"})
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message:error})
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        const findProduct = await Product.findById(id);
        if (!findProduct) {
            res.status(200).json({message: "Successfully deleted product"})
        }   
    } catch (error) {
        res.status(500).json(error);
    }
};