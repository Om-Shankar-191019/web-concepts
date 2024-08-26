const errorHandler = async (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let error = err.message || "Something went wrong, please try again!";

  return res.status(statusCode).json({ error });
};

export default errorHandler;
