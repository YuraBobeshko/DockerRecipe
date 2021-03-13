import bookmark from "../controllers/bookmark.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", bookmark.findAll);

  router.post("/add", bookmark.create);

  router.get("/:id", bookmark.getOne);

  router.put("/:id", bookmark.update);

  router.delete("/:id", bookmark.destroy);

  app.use("/api/bookmarks", router);
};
