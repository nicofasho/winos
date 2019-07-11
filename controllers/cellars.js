const Cellar = require("../models/cellar");
const Bottle = require("../models/bottle");
const User = require("../models/user");

function cellarIndex(req, res) {
  User.findById(req.user._id)
    .populate({
      path: "cellars",
      populate: { path: "bottles" }
    })
    .then(user => res.status(200).json(user.cellars))
    .catch(err => res.status(400).json(err));
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
  Cellar.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(cellar => res.json(cellar))
    .catch(err => res.status(400).json(err));
}

function deleteCellar(req, res) {
  Cellar.findOneAndDelete({ _id: req.params.id })
    .then(cellar => res.json(cellar))
    .catch(err => res.status(400).json(err));
}

function bottleDetail(req, res) {
  Cellar.findById(req.params.cellarId)
    .populate("bottles")
    .then(cellar => {
      return res.json(cellar.bottles[req.params.slotId]);
    })
    .catch(err => res.status(400).json(err));
}

function updateBottle(req, res) {
  Cellar.findById(req.params.cellarId)
    .then(cellar => {
      Bottle.findOneAndUpdate({ _id: req.params.bottleId }, req.body, {
        new: true
      })
        .then(async bottle => {
          cellar.bottles.set(req.params.slotId, bottle);
          await cellar.save();
          return res.json(bottle);
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
}

function deleteBottle(req, res) {
  Cellar.findById(req.params.cellarId)
    .then(async cellar => {
      cellar.bottles.set(req.params.slotId, null);
      await cellar.save();
      return Bottle.findOneAndDelete({ _id: req.params.bottleId })
        .then(bottle => res.json(bottle))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
}

async function createBottle(req, res) {
  const bottle = new Bottle(req.body);
  bottle.slot = req.params.slotId;
  try {
    await bottle.save();
    Cellar.findById(req.params.cellarId)
      .then(async cellar => {
        cellar.bottles.set(req.params.slotId, bottle);
        await cellar.save();
        return res.json(cellar);
      })
      .catch(err => res.status(400).json(err));
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  cellarIndex,
  createCellar,
  updateCellar,
  deleteCellar,
  bottleDetail,
  updateBottle,
  deleteBottle,
  createBottle
};
