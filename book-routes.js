const express = require("express");
const {
  getAllBooks,
  addNewBook,
  deleteBook,
  updateBook,
  getSingleBooksByID,
} = require("../controllers/book-controller");
const { get } = require("mongoose");

//create express routes

const router = express.Router();

//all the routes that are related to book only or remember ,ke bad controller write controller file me

router.get("/get",getAllBooks);  //, ke bad controller jp create kiya vo map karo
router.get("/get/:id",getSingleBooksByID);
router.post("/add",addNewBook);
router.put("/update/:id",updateBook);
router.delete("/delete/:id",deleteBook);



module.exports=router; //ese server.js me import karo