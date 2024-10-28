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
module.exports = {
  getComics,
  addComics,
};
