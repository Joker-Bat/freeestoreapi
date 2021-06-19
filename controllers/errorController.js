const sendErrorDev = (err, req, res) => {
  console.log(err);
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    err: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, req, res) => {
  console.log(err);
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: 'fail',
      msg: err.message,
    });
  } else {
    return res.status(err.statusCode).json({
      status: 'fail',
      msg: 'Something Went wrong',
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorProd(err, req, res);
  }
};
