import models, { Bookmark, Sequelize } from "../models";

const Op = Sequelize.Op;

const create = (req, res) => {
  if (!req.body.title && !req.body.discribe) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const bookmark = {
    title: req.body.title,
    discribe: req.body.discribe,
    rating: req.body.rating,
    ModelId: req.body.ModelId,
    UserId: req.body.UserId,
    target: req.body.target,
  };

  Bookmark.create(bookmark)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bookmark.",
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  Bookmark.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Bookmark was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Bookmark with id=${id}. Maybe Bookmark was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Bookmark with id=" + id,
      });
    });
};

const getOne = (req, res) => {
  return Bookmark.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookmarks.",
      });
    });
};

const destroy = (req, res) => {
  const id = req.params.id;

  Bookmark.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Bookmark was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Bookmark with id=${id}. Maybe Bookmark was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Bookmark with id=" + id,
      });
    });
};

const findAll = (req, res) => {
  //   const title = req.query.title;
  //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  //   Bookmark.findAll({ where: condition })
  Bookmark.findAll({
    include: [
      { model: models.User },
      { model: models.User, as: "selected" },
      { model: models.Dish, as: "dish" },
      { model: models.Recipe, as: "recipe" },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookmarks.",
      });
    });
};

export default { create, update, getOne, destroy, findAll };
