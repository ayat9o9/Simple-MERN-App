const Post = require("../Models/Post");

exports.NewPost = async (req, res) => {
  const doc = await Post.create(req.body);
  if (!doc) {
    res.status(404).json({
      status: true,
      msg: "There Is Error",
    });
  }
  res.status(200).json({
    status: true,
    doc,
  });
};

exports.Posts = async (req, res) => {
  const doc = await Post.find();
  if (!doc) {
    res.status(404).json({
      status: true,
      msg: "There Is Error",
    });
  }
  res.status(200).json({
    status: true,
    doc,
  });
};

exports.Post = async (req, res) => {
  const doc = await Post.findById(req.params.id);
  if (!doc) {
    res.status(404).json({
      status: true,
      msg: "There Is Error",
    });
  }
  res.status(200).json({
    status: true,
    doc,
  });
};

exports.Update = async (req, res) => {
  const doc = await Post.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
  if (!doc) {
    res.status(404).json({
      status: true,
      msg: "There Is Error",
    });
  }
  res.status(200).json({
    status: true,
    doc,
  });
};

exports.Delete = async (req, res) => {
  const doc = await Post.findByIdAndDelete(req.params.id);
  if (!doc) {
    res.status(404).json({
      status: true,
      msg: "There Is Error",
    });
  }
  res.status(200).json({
    status: true,
    doc,
  });
};
