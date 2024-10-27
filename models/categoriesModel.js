// model/categoriesModel.js

const connection = require("../database/db");

const getCategories = (id = null) => {
  const query = id ? `SELECT * FROM categories WHERE id = ?` : `SELECT * FROM categories`;
  return new Promise((resolve, reject) => {
    connection.query(query, id ? [id] : [], (error, result) => {
      if (error) {
        reject(error);
        return;
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
  getCategories,
  addCategories,
  updateCategories,
  deleteCategories,
};
