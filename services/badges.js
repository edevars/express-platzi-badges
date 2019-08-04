const badgesMocks = require("../utils/mocks/badges");

class BadgeService {
  constructor() {}

  getBadges() {
    return Promise.resolve(badgesMocks);
  }

  getBadge({ badgeId }) {
    return Promise.resolve(badgesMocks[0]);
  }

  createBadge({ badge }) {
    return Promise.resolve(badgesMocks[0]);
  }

  updateBadge({ badgeId, badge }) {
    return Promise.resolve(badgesMocks[0]);
  }

  deleteBadge({ badgeId }) {
    return Promise.resolve(badgesMocks[0]);
  }
}

module.exports = BadgeService;
