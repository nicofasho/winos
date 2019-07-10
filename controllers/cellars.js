const Cellar = require("../models/cellar");
const Bottle = require("../models/bottle");
const User = require("../models/user");

function cellarIndex(req, res) {
  console.log(req.user._id);
  User.findById(req.user._id)
    .populate("cellars")
    .then(user => res.status(200).json(user.cellars));
}

function createCellar(req, res) {
  User.findById(req.user._id).then(async user => {
    const cellar = new Cellar(req.body);
    try {
      await cellar.save();
      user.cellars.push(cellar);
      await user.save();
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  });
}

function updateCellar(req, res) {
  Cellar.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    .then(cellar => res.json(cellar))
    .catch(err => res.status(400).json(err));
}

function deleteCellar(req, res) {
  Cellar.findOneAndDelete({_id: req.params.id})
    .then(cellar => res.json(cellar))
    .catch(err => res.status(400).json(err));
}

function bottleDetail(req, res) {
  return;
}

function editBottle(req, res) {
  return;
}

function updateBottle(req, res) {
  return;
}

function deleteBottle(req, res) {
  return;
}

function createBottle(req, res) {
  return;
}

function addBottle(req, res) {
  return;
}

module.exports = {
  cellarIndex,
  createCellar,
  updateCellar,
  deleteCellar,
  bottleDetail,
  editBottle,
  updateBottle,
  deleteBottle,
  createBottle,
  addBottle
};
