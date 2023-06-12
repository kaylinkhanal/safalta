const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: storage });

const { addNewItem, getAllItems, getImageById } = require("../controller/item");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/items/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

router.post("/items", upload.single("itemImage"), addNewItem);
router.get("/items", getAllItems);
router.get("/item-image/:id", getImageById);

module.exports = router;
