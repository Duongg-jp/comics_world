// model/categoriesModel.js

const connection = require("../database/db");

// lấy danh sách categories
const getAllCategories = () => {
  const query = `SELECT * FROM categories`;
  return new Promise((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
};

// lấy danh sách categories theo id
const getCategoryById = (id) => {
  const query = `SELECT * FROM categories WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};

// thêm data categories
const addCategories = (name) => {
  const query = `INSERT INTO categories (name) VALUES (?)`;
  return new Promise((res, rej) => {
    connection.query(query, [name], (error, results) => {
      if (error) {
        rej(error);
        return;
      }
      res(results.insertId);
    });
  });
};

module.exports = { getAllCategories, addCategories, getCategoryById };
