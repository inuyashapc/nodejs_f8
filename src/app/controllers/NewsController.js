class NewsController {
  //[Get] /news
  index(req, res) {
    console.log("abcd", req.query.q);
    res.render("news");
  }
  //[Get] /news/:slug
  show(req, res) {
    res.send("NEWS DETAILS!!!!");
  }
}

module.exports = new NewsController();
