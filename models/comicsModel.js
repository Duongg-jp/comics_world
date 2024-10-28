// models/comicsModel.js

const connection = require("../database/db");

// lấy danh sách comics
const getComics = (id = null) => {
  const query = id
    ? `SELECT * FROM comics WHERE id = ?`
    : `SELECT * FROM comics`;
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

// thêm data comics
const addComics = (name, author, price, stock, publisher_id, category_id) => {
  const query = `INSERT INTO comics (name, author, price, stock, publisher_id, category_id) VALUES (?, ?, ?, ?, ?, ?)`;
  return new Promise((res, rej) => {
    connection.query(
      query,
      [name, author, price, stock, publisher_id, category_id],
      (error, results) => {
        if (error) {
          rej(error);
          return;
        }
        res(results.insertId);
      }
    );
  });
};

// Cập nhật
const updateComics = (
  id,
  name,
  author,
  price,
  stock,
  publisher_id,
  category_id
) => {
  const query = `
    INSERT INTO comics (id, name, author, price, stock, publisher_id, category_id) 
    VALUES (?, ?, ?, ?, ?, ?, ?) 
    ON DUPLICATE KEY UPDATE 
      name = VALUES(name), 
      author = VALUES(author), 
      price = VALUES(price), 
      stock = VALUES(stock), 
      publisher_id = VALUES(publisher_id), 
      category_id = VALUES(category_id)`;

  return new Promise((res, rej) => {
    connection.query(query, [id, name, author, price, stock, publisher_id, category_id], (error, result) => {
      if (error) {
        return rej(error);
      }
      res(result);
    });
  });
};


module.exports = {
  getComics,
  addComics,
  updateComics,
};
