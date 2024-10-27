// database/db.js
const mysql2 = require('mysql2');

// Cấu hình thông tin kết nối
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comics_world_2'
  });

// Categories
const createCategoriesTable = `
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;

  // Publishers
const createPublishersTable = `
CREATE TABLE IF NOT EXISTS publishers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;

// Comics
const createComicsTable = `
CREATE TABLE IF NOT EXISTS comics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    publisher_id INT,
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (publisher_id) REFERENCES publishers(id) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL ON UPDATE CASCADE
);`;

// in thong bao

connection.connect((error)=>{
    if (error) {
        console.log(`Kết nối DB lỗi : ${error.stack}`);
        return 
        
    }
    console.log(`Kết nối DB thành công !`);
})

connection.query(createPublishersTable,(error,result)=>{
    if (error) {
        console.log(`Tạo bảng Publishers thất bại ${error.stack}`);
    }
    console.log(`Tạo bảng Publishers thành công !`)
})

connection.query(createCategoriesTable,(error,result)=>{
    if (error) {
        console.log(`Tạo bảng Categories thất bại ${error.stack}`);
    }
    console.log(`Tạo bảng Categories thành công !`)
})

connection.query(createComicsTable,(error,result)=>{
    if (error) {
        console.log(`Tạo bảng Comics thất bại ${error.stack}`);
    }
    console.log(`Tạo bảng Comics thành công !`)
})

module.exports = connection;
