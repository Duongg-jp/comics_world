// controller/categoriesController.js

const CategoriesModel = require("../models/categoriesModel");

// lấy danh sách categories
const getAllCategories = async (req, res) => {
  const getCategories = await CategoriesModel.getAllCategories();
  return res.status(200).json({
    success: true,
    message: "Lấy danh sách categories thành công",
    data: {
      getCategories,
    },
  });
};

// thêm data
const addCategories = async (req, res) => {
  const { name } = req.body;

  console.log("body",res.body);
  

  try {
    const categoryId = await CategoriesModel.addCategories(name);
    const categories = await CategoriesModel.getCategoryById(categoryId);

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


module.exports = {
  getAllCategories,
  addCategories,
};
