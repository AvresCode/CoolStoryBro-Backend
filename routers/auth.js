const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");
const Space = require("../models/").space;
const Story = require("../models/").story;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    //  const user = await User.findOne({ where: { email } });
    const user = await User.findOne({
      where: { email },
      include: { model: Space, include: [Story] },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });

    //return res.status(200).send({ token, user: user.dataValues});
    return res.status(200).send({ token, user: user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });
    // When a user signs up, create a new space
    const newSpace = await Space.create({
      title: `${name}'s space`,
      // description: null,
      // backgroundColor: "#ffffff",
      // color: "#000000",
      userId: newUser.dataValues.id,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });
    // res.status(201).json({ token, user: newUser.dataValues });
    res
      .status(201)
      .json({ token, user: { ...newUser.dataValues, space: newSpace } });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid

router.get("/me", authMiddleware, async (req, res) => {
  const id = req.user.id;
  const user = await User.findByPk(id, {
    include: { model: Space, include: [Story] },
  });
  // don't send back the password hash
   delete req.user.dataValues["password"];
  // res.status(200).send({ ...req.user.dataValues });
  res.status(200).send(user);
});

module.exports = router;
