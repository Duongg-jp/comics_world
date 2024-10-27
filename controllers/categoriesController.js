// controller/categoriesController.js

const CategoriesModel = require("../models/categoriesModel");

// lấy danh sách categories
const getCategories = async (req, res) => {
  const { id } = req.params;
  try {
    const categories = await CategoriesModel.getCategories(id);

    if (id && categories.length == 0) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy dữu liệu với id này ",
      });
    }
    return res.status(200).json({
      success: true,
      message: id
        ? "Lấy dữ liệu id thành công "
        : " Lấy danh sách categories thành công",
      data: {
        categories,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi khi lấy danh sách categories",
      error: error.message,
    });
  }
};

// thêm data
const addCategories = async (req, res) => {
  const { name } = req.body;

  try {
    const categories = await CategoriesModel.getCategories(name);

    return res.status(200).json({
      success: true,
      message: "Thêm categories thành công",
      data: { categories },
    });
  } catch (error) {
    console.error("Error :", error);
    return res.status(500).json({
      success: false,
      message: "lỗi category.",
      error: error.message,
    });
  }
};

// update
const updateCategories = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    await CategoriesModel.updateCategories(id, name);
    const updateCategories = await CategoriesModel.getCategoryById(id);
    return res.status(200).json({
      success: true,
      message: "Cập nhật categories thành công",
      data: { updateCategories },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Lỗi cập nhật categories",
      error: error.message,
    });
  }
};

// xóa
const deleteCategories = async (req, res) => {
  const { id } = req.params;

  const deleteCategories = await CategoriesModel.deleteCategories(id);
  return res.status(200).json({
    success: true,
    message: "Xóa thành công ",
    data: deleteCategories,
  });
};

module.exports = {
  getCategories,
  addCategories,
  updateCategories,
  deleteCategories,
};
