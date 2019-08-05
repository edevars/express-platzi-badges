const express = require("express");
const BadgeService = require("../services/badges");

const router = express.Router();

//Instanciando la clase del sevicio
const badgeService = new BadgeService();

router.get("/", async function(req, res, next) {
  try {
    const badges = await badgeService.getBadges();

    res.status(200).json({
      data: badges,
      message: "badges listed"
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:badgeId", async function(req, res) {
  const { badgeId } = req.params;

  try {
    const badge = await badgeService.getBadge({ badgeId });

    res.status(200).json({
      data: badge,
      message: "badge retrieve"
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async function(req, res) {
  const { body: badge } = req;

  try {
    const badge = await badgeService.createBadge({ badge });

    res.status(201).json({
      data: badge,
      message: "badge created"
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:badgeId", async function(req, res) {
  const { badgeId } = req.params;
  const { body: badge } = req;

  try {
    const badgeUpdated = await badgeService.updateBadge({ badgeId, badge });

    res.status(201).json({
      data: badgeUpdated,
      message: "badge updated"
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:badgeId", async function(req, res) {
  const { badgeId } = req.params;
  try {
    const badge = await badgeService.deleteBadge({ badgeId });

    res.status(201).json({
      data: badge,
      message: "badge deleted"
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
