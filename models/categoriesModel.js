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

// update data categories
const updateCategories = (id, name) => {
  const query = `UPDATE categories SET name = ? WHERE id = ?`;
  return new Promise((res, rej) => {
    connection.query(query, [name, id], (error, result) => {
      if (error) {
        rej(error);
        return;
      }
      res(result);
    });
  });
};

// xóa
const deleteCategories = (id) => {
  const query = `DELETE FROM categories WHERE id = ?`;
  return new Promise((res, rej) => {
    connection.query(query, [id], (error, result) => {
      if (error) {
        rej(error);
        return;
      }
      res(result);
    });
  });
};
module.exports = {
  getAllCategories,
  addCategories,
  getCategoryById,
  updateCategories,
  deleteCategories,
};
