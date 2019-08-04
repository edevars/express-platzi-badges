const express = require("express");
const badgesMocks = require("../utils/mocks/badges");
const BadgeService = require("../services/badges");

const router = express.Router();

//Instanciando la clase del sevicio
const badgeService = new BadgeService();

router.get("/", async function(req, res) {
  const badges = await badgeService.getBadges();

  res.status(200).json({
    data: badges,
    message: "badges listed"
  });
});

router.get("/:badgeId", async function(req, res) {
  const { badgeId } = req.params;

  const badge = await badgeService.getBadge({ badgeId });

  res.status(200).json({
    data: badge,
    message: "badge retrieve"
  });
});

router.post("/", async function(req, res) {
  const { body: badge } = req;

  const badge = await badgeService.createBadge({ badge });

  res.status(201).json({
    data: badge,
    message: "badge created"
  });
});

router.put("/:badgeId", async function(req, res) {
  const { badgeId } = req.params;
  const { body: badge } = req;
  const badgeUpdated = await badgeService.updateBadge({ badgeId, badge });

  res.status(201).json({
    data: badgeUpdated,
    message: "badge updated"
  });
});

router.put("/:badgeId", async function(req, res) {
  const { badgeId } = req.params;
  const badge = await badgeService.deleteBadge({ badgeId });

  res.status(201).json({
    data: badge,
    message: "badge deleted"
  });
});

module.exports = router;
