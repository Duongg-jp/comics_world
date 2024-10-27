// models/publishersModel.js

const connection = require("../database/db");

// lấy danh sách publishers
const getAllPublishers = () => {
  const query = `SELECT * FROM publishers`;
  return new Promise((res, rej) => {
    connection.query(query, (error, result) => {
      if (error) {
        rej(error);
        return;
      }
      res(result);
    });
  });
};

module.exports = {
  getAllPublishers,
};
