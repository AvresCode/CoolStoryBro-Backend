const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;
const router = new Router();

// http :4000/spaces
//http --ignore-stdin :4000/spaces
//http://localhost:4000/spaces
router.get("/", async (req, res, next) => {
  try {
    const spaceResponse = await Space.findAll();
    console.log("spaceResponse", spaceResponse);
    res.send(spaceResponse);
  } catch (e) {
    console.log("spaces error:", e.message);
    next(e);
  }
});

// http :4000/spaces/1
//http --ignore-stdin :4000/spaces/1
//http://localhost:4000/spaces/1

router.get("/:id", async (req, res, next) => {
  try {
    const spaceId = req.params.id;
    console.log("spaceId", spaceId);
    const specificSpaceWithStories = await Space.findByPk(spaceId, {
      include: Story,
    });
    res.send(specificSpaceWithStories);
  } catch (e) {
    console.log("space detail error:", e.message);
    next(e);
  }
});

module.exports = router;
