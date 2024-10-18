const Product = require('../model/productModel');
const Category = require('../model/catagoryModel');

exports.getproducts = async (req, res) => {
      try {
          const products = await Product.find().populate('category', 'name description');
          res.status(200).json(products);
      } catch (error) {
          res.status(400).json("error",error);
      }
  };
  
  
  exports.postproducts = async (req, res) => {
      try {
          const { name, description, price, category} = req.body;
  
          const categoryExists = await Category.findById(category);
          if (!categoryExists) {
              return res.status(404).json({ message: 'Category not found' });
          }
  
          const newProduct = new Product({ 
            name, 
            description, 
            price, 
            category
      });
          await newProduct.save();
          res.status(201).json({ message: 'Product added successfully!', product: newProduct });
      } catch (error) {
          res.status(400).json("error",error);
      }
  };
  
  
  exports.singleproducts = async (req, res) => {
      try {
          const { id } = req.params;
          const product = await Product.findById(id).populate('category', 'name description');
          res.status(200).json(product); 
      } catch (error) {
          res.status(400).json("error",error);
      }
  };
  

  exports.putproducts = async (req, res) => {
      try {
          const { id } = req.params;
          const { name, description, price, category, inStock } = req.body;
          const updatedProduct = await Product.findByIdAndUpdate(id);
          res.status(200).json({ message: 'Product updated successfully!', product: updatedProduct });
      } catch (error) {
          res.status(400).json("error",error);
      }
  };
  
  
  exports.deleteproducts = async (req, res) => {
      try {
          const { id } = req.params;
          const deletedProduct = await Product.findByIdAndDelete(id);
          res.status(200).json({ message: 'Product deleted successfully!' }); 
      } catch (error) {
          res.status(400).json("error",error);
      }
  };
  