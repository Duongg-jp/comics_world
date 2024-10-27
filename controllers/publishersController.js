// controller/publishersController.js

const publishersModel = require("../models/publishersModel");

const getAllPublisher = async (req, res) => {
  const getPublisher = await publishersModel.getAllPublishers();
  return res.status(200).json({
    success: true,
    message: "Success",
    data: {
      getAllPublisher,
    },
  });
};

module.exports = {
    getAllPublisher,
};
