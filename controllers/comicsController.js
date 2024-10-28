// controller/comicsController.js

const comicsModel = require("../models/comicsModel");

// lấy danh sách comics
const getComics = async (req, res) => {
  const { id } = req.params;
  try {
    const comics = await comicsModel.getComics(id ? id : null);

    if (id && comics.length == 0) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy dữu liệu với id này ",
      });
    }
    return res.status(200).json({
      success: true,
      message: id
        ? "Lấy dữ liệu id thành công "
        : " Lấy danh sách comics thành công",
      data: {
        comics,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi khi lấy danh sách comics",
      error: error.message,
    });
  }
};

// thêm data
const addComics = async (req, res) => {
  const { name, author, price, stock, publisher_id, category_id } = req.body; // Bỏ id

  try {
    const comicsId = await comicsModel.addComics(
      name,
      author,
      price,
      stock,
      publisher_id,
      category_id
    );

    const newComics = await comicsModel.getComics(comicsId);
    return res.status(200).json({
      success: true,
      message: "Thêm comics thành công",
      data: { newComics },
    });
  } catch (error) {
    console.error("Error :", error);
    return res.status(500).json({
      success: false,
      message: "Lỗi comics.",
      error: error.message,
    });
  }
};

// Cập nhật
const updateComics = async (req, res) => {
  const { id } = req.params;
  const { name, author, price, stock, publisher_id, category_id } = req.body;

  try {
    await comicsModel.updateComics(
      id,
      name,
      author,
      price,
      stock,
      publisher_id,
      category_id
    );

    const updatedComic = await comicsModel.getComics(id);

    return res.status(200).json({
      success: true,
      message: "Cập nhật truyện tranh thành công",
      data: { updatedComic },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Lỗi cập nhật truyện tranh",
      error: error.message,
    });
  }
};

module.exports = {
  getComics,
  addComics,
  updateComics,
};
