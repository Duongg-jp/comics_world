// models/comicsModel.js

const connection = require("../database/db");

// lấy danh sách comics
const getComics = (id = null) => {
  const query = id ? `SELECT * FROM comics WHERE id = ?` : `SELECT * FROM comics`;
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

module.exports = {
    getComics,
};
