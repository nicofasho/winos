const express = require("express");
const router = express.Router();
const cellarsCtrl = require("../../controllers/cellars");

// router.use(require('../../config/auth'));
// Cellar Routes
router.get("/", cellarsCtrl.cellarIndex);
router.post("/", cellarsCtrl.createCellar);
router.put("/:id", cellarsCtrl.updateCellar);
router.delete("/:id", cellarsCtrl.deleteCellar);

// Bottle Routes
router.get("/:cellarId/:slotId/bottles/:bottleId", cellarsCtrl.bottleDetail);
router.put("/:cellarId/:slotId/bottles/:bottleId", cellarsCtrl.updateBottle);
router.delete("/:cellarId/:slotId/bottles/:bottleId", cellarsCtrl.deleteBottle);
router.post("/:cellarId/:slotId", cellarsCtrl.createBottle);

module.exports = router;

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}