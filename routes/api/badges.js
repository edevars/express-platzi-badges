const express = require("express");
const router = express.Router();
const badgesMocks = require("../../utils/mocks/badges");

router.get("/", function(req, res) {
  res.status(200).json({
    data: badgesMocks,
    message: "badges listed"
  });
});

router.get("/:badgeId", function(req, res) {
  const { badgeId } = req.params;

  res.status(200).json({
    data: badgesMocks[0],
    message: "badge retrieve"
  });
});

router.post("/", function(req, res) {
  const { badgeId } = req.params;

  res.status(201).json({
    data: badgesMocks[0],
    message: "badge created"
  });
});

router.put("/:badgeId", function(req, res) {
  const { badgeId } = req.params;

  res.status(201).json({
    data: badgesMocks[0],
    message: "badge updated"
  });
});

router.put("/:badgeId", function(req, res) {
    const { badgeId } = req.params;
  
    res.status(201).json({
      data: badgesMocks[0],
      message: "badge deleted"
    });
  });

module.exports = router;
