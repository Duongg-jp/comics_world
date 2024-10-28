// models/publishersModel.js

const connection = require("../database/db");

// lấy danh sách publishers
const getPublishers = (id = null) => {
  const query = id
    ? `SELECT * FROM publishers WHERE id = ?`
    : `SELECT * FROM publishers`;
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

// thêm data publishers
const addPublishers = (name, contact_email) => {
  const query = `INSERT INTO publishers (name, contact_email) VALUES (?, ?)`;
  return new Promise((res, rej) => {
    connection.query(query, [name, contact_email], (error, results) => {
      if (error) {
        rej(error);
        return;
      }
      res(results.insertId);
    });
  });
};

// Cập nhật
const updatePublishers = (id, name, contact_email) => {
  const query = `
    INSERT INTO publishers (id, name, contact_email) 
    VALUES (?, ?, ?) 
    ON DUPLICATE KEY UPDATE 
      name = VALUES(name), 
      contact_email = VALUES(contact_email)`;

  return new Promise((res, rej) => {
    connection.query(query, [id, name, contact_email], (error, result) => {
      if (error) {
        return rej(error);
      }
      res(result);
    });
  });
};


module.exports = {
  getPublishers,
  addPublishers,
  updatePublishers,
};
