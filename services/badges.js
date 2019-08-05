const badgesMocks = require("../utils/mocks/badges");
const MongoLib = require("../lib/mongo");

class BadgeService {
  constructor() {
    this.collection = "badges";
    this.mongoDB = new MongoLib();
  }

  async getBadges() {
    const { collection, mongoDB } = this;
    const badges = await mongoDB.getAll(collection);

    return badges || [];
  }

  async getBadge({ badgeId }) {
    const { collection, mongoDB } = this;
    const badge = await mongoDB.getOne(collection, badgeId);

    return badge || {};
  }

  async createBadge({ badge }) {
    const { collection, mongoDB } = this;
    const badgeCreated = await mongoDB.create(collection, badge);

    return badgeCreated || {};
  }

  async updateBadge({ badgeId, badge }) {
    const { collection, mongoDB } = this;
    const badgeUpserted = await mongoDB.updateOne(collection, badgeId, badge);

    return badgeUpserted || {};
  }

  async deleteBadge({ badgeId }) {
    const { collection, mongoDB } = this;
    const badgeDeleted = await mongoDB.delete(collection, badgeId);

    return badgeDeleted || {};
  }
}

module.exports = BadgeService;
