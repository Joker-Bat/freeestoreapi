// Our modules
const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');

// Helper
function ifObjectIsEmpty(object) {
  var isEmpty = true;
  if (JSON.stringify(object) == JSON.stringify({})) {
    // Object is Empty
    isEmpty = true;
  } else {
    //Object is Not Empty
    isEmpty = false;
  }
  return isEmpty;
}

/*
  Get All products
*/

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = new APIFeatures(Product.find(), req.query)
    ?.filter()
    ?.sort()
    ?.limitFields()
    ?.limitResults();

  // Check if valid promise is got
  if (!products)
    return next(
      new AppError(
        'Please provide a valid query parameters check documentation!',
        400
      )
    );

  const result = await products.model;
  // check if first item got any item in there
  if (ifObjectIsEmpty(result[0]))
    return next(
      new AppError(
        'Please provide a valid query parameters check documentation!',
        400
      )
    );
  res.status(200).json({
    status: 'success',
    results: result.length,
    data: {
      products: result,
    },
  });
});

/*
  Get product by Name
*/

exports.getProductBySlug = catchAsync(async (req, res, next) => {
  const { slug } = req.params;

  const product = new APIFeatures(
    Product.find({ slug }),
    req.query
  ).limitFields();

  const result = await product.model;
  if (result.length === 0)
    return next(new AppError('Please provide a valid product name', 400));

  res.status(200).json({
    status: 'success',
    data: {
      product: result,
    },
  });
});

/*
  Get random products
*/

exports.getRandomProduct = catchAsync(async (req, res, next) => {
  const product = await Product.countDocuments();
  var random = Math.floor(Math.random() * product) + 1;

  const result = new APIFeatures(
    Product.find({ ref: random }),
    req.query
  ).limitFields();

  const doc = await result.model;

  // check if first item got any item in there
  if (ifObjectIsEmpty(doc[0]))
    return next(
      new AppError(
        'Please provide a valid query parameters check documentation!',
        400
      )
    );

  res.status(200).json({
    status: 'success',
    data: {
      product: doc,
    },
  });
});

/*
  Search Products
*/

exports.searchProducts = catchAsync(async (req, res, next) => {
  const askedProduct = req.params.subString;

  const products = await Product.find({
    name: { $regex: askedProduct, $options: 'i' },
  });

  res.status(200).json({
    status: 'success',
    result: products.length,
    data: {
      products,
    },
  });
});

/*
  fake post
*/

exports.fakePost = catchAsync(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    stauts: 'success',
    message: 'Successfully posted',
  });
});
