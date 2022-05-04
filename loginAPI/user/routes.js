const { Router } = require("express");
const { addUser, login, updateUser, deleteUser, addFavourites } = require("./controller");
const { hashPass, unHash, decrypt, tokenCheck } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/login", unHash, login);
userRouter.get("/user", decrypt, login);
userRouter.patch("/user", tokenCheck, hashPass, updateUser);
userRouter.delete("/user/:username", tokenCheck, deleteUser);
userRouter.put("/favourites", addFavourites);

module.exports = userRouter;