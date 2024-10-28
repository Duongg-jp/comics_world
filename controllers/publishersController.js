// controller/publishersController.js

const publishersModel = require("../models/publishersModel");

// lấy danh sách publishers
const getPublishers = async (req, res) => {
  const { id } = req.params;
  try {
    const publishers = await publishersModel.getPublishers(id);

    if (id && publishers.length == 0) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy dữu liệu với id này ",
      });
    }
    return res.status(200).json({
      success: true,
      message: id
        ? "Lấy dữ liệu id thành công "
        : " Lấy danh sách publishers thành công",
      data: {
        publishers,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi khi lấy danh sách publishers",
      error: error.message,
    });
  }
};

// thêm data
const addPublishers = async (req, res) => {
  const { name, contact_email } = req.body;

  try {
     // Thêm publisher mới và lấy ID của nó
     const publisherId = await publishersModel.addPublishers(name, contact_email);
    
     // Truy vấn lại để lấy thông tin chi tiết của publisher vừa thêm
     const newPublisher = await publishersModel.getPublishers(publisherId);

    return res.status(200).json({
      success: true,
      message: "Thêm publishers thành công",
      data: { newPublisher },
    });
  } catch (error) {
    console.error("Error :", error);
    return res.status(500).json({
      success: false,
      message: "lỗi publishers.",
      error: error.message,
    });
  }
};

module.exports = {
  getPublishers,
  addPublishers,
};
