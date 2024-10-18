const Category = require('../model/catagoryModel');


exports.addCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newCategory = new Category({ name, description });
        await newCategory.save();
        res.status(201).json({ message: 'Category added successfully!', category: newCategory });
    } catch (error) {
        res.status(400).json("error",error);
    }
};


exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json("error",error);
    }
};
