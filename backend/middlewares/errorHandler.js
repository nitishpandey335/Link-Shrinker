export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
<<<<<<< HEAD
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  
  if (err.code === 11000) {
    return res.status(400).json({ error: 'Duplicate entry' });
  }
  
=======

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  if (err.code === 11000) {
    return res.status(400).json({ error: 'Duplicate entry' });
  }

>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d
  res.status(500).json({ error: 'Something went wrong!' });
};

export const notFound = (req, res, next) => {
<<<<<<< HEAD
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}; 
=======
  res.status(404).json({ error: 'Route not found' });
};
>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d
