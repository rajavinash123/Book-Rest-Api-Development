const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks) {
      res.status(200).json({
        success: true,
        message: "List of Book Fetched successfully ",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "list of book not collection",
      });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      success: false,
      message: "Somthing went wrong!",
    });
  }
};

const getSingleBooksByID = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const bookdetailsByID = await Book.findById(getCurrentBookId);
    if (!bookdetailsByID) {
      return res.status(404).json({
        success: false,
        message:
          "Books with the current id is not found, try with different id",
      });
    }

    res.status(200).json({
      success: true,
      data: bookdetailsByID,
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      success: false,
      message: "Somthing went wrong! plese try agin",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFromData = req.body;
    const newlyCreatedBook = await Book.create(newBookFromData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.log("error ", e);
    res.status(500).json({
      success: false,
      message: "Somthing went wrong! plese try agin",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const updateBookFromData = req.body;
    const getCurrentBookID = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID,
      updateBookFromData,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (e) {
    console.log("error ", e);
    return res.status(500).json({
      success: false,
      message: "Somthing went wrong! plese try agin",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    return res.status(200).json({
      success: true,
      data: deletedBook,
    });
  } catch (e) {
    console.log("error ", e);
    return res.status(500).json({
      success: false,
      message: "Somthing went wrong! plese try agin",
    });
  }
};

module.exports = {
  getAllBooks,
  addNewBook,
  deleteBook,
  updateBook,
  getSingleBooksByID,
};
