// models/publishersModel.js

const connection = require("../database/db");

// lấy danh sách publishers
const getPublishers = (id = null) => {
  const query = id ? `SELECT * FROM publishers WHERE id = ?` : `SELECT * FROM publishers`;
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
  getPublishers,
};
