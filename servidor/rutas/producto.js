const { Router } = require("express");
const router = Router();

const {
  create,
  getMany,
  getOne,
  deleteOne,
  update
} = require("../controladores/producto.controlador");

router
  .route("/")
  .post(create)
  .get(getMany);

router
  .route("/:id")
  .get(getOne)
  .delete(deleteOne)
  .put(update);

module.exports = router;
