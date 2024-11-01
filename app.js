// app.js
const express = require('express');
const app = express();
const PORT = 3000;
require('./database/db');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const categoriesRoutes = require('./routes/categoriesRoutes');
const publishersRoutes = require('./routes/publishersRoutes');
const comicsRoutes = require('./routes/comicsRoutes');

app.use('/api/categories',categoriesRoutes)
app.use('/api/publishers',publishersRoutes)
app.use('/api/comics',comicsRoutes)

app.use((req, res) => {
  res.status(404).json({
    status: 'lỗi',
    message: '404 !!!!!',
  });
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
});
