const Product = require("../models/product");

exports.createProduct = (req, res, next) => {
  const { title, description, imageUrl, userId, price } = req.body;
  const product = new Product({
    title,
    description,
    imageUrl,
    userId,
    price,
  });
  product
    .save()
    .then(() => res.status(201).json({ message: "Product was saved !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateProduct = (req, res, next) => {
  Product.updateOne(
    {
      _id: req.params.id,
    },
    req.body
  )
    .then(() =>
      res.status(201).send({ message: "Product updated successfully!" })
    )
    .catch(() =>
      res.status(404).json({
        error: "Product not found",
      })
    );
};

exports.deleteProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      product
        .deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Product was deleted !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch(() => res.status(500).json({ error: "Product not found!" }));
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).json({ error }));
};
