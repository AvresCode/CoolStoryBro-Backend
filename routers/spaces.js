const { Router } = require("express");
const auth = require("../auth/middleware");
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
    const specificSpaceWithStories = await Space.findByPk(spaceId, {
      include: Story,
    });
    res.send(specificSpaceWithStories);
  } catch (e) {
    console.log("space detail error:", e.message);
    next(e);
  }
});
//to try from the terminal if it works, try without auth
//http DELETE :4000/spaces/story/2
router.delete("/story/:id", auth, async (req, res, next) => {
  try {
    const idToDelete = parseInt(req.params.id);
    await Story.destroy({
      where: { id: idToDelete },
    });
    res.status(200).send("Story deleted successfully");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//http POST :4000/spaces/story name="test" content='testcontent' imageUrl="httphhh" spaceId=3
router.post("/story", async (req, res, next) => {
  try {
    const { name, content, imageUrl, spaceId } = req.body;

    if (!name|| !content|| !imageUrl) {
      return res.status(400).send("missing information");
    } else {
      const newStory = await Story.create({ name, content, imageUrl, spaceId });
      console.log("ok");
      res.send(newStory);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
