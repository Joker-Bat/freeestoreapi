exports.getAllProducts = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'successfully connected. :)',
  });
};
