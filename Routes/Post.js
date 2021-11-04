const router = require("express").Router();
const { Delete, NewPost, Post, Posts, Update } = require("../Controller/Post");

router.post("/post", NewPost);
router.get("/post", Posts);
router.get("/post/:id", Post);
router.put("/post/:id", Update);
router.delete("/post/:id", Delete);

module.exports = router;
