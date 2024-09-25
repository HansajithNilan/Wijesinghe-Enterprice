const express = require("express");
const router  = express.Router();
const Item = require("../Model/ItemModel")
const ItemController = require ("../Controllers/ItemController");



router.get("/",ItemController.getAllitems);
router.post("/",ItemController.additems);
router.get("/:id",ItemController.getById);
router.put("/:id",ItemController.updateItems);
router.delete("/:id",ItemController.deleteItem);


module.exports= router;