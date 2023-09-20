const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  //[Get] /
  //cach 1
  // async index(req, res) {
  //   try {
  //     const a = await Course.find({});
  //     if (a) {
  //       console.log("data", a);
  //       res.send(a);
  //     } else {
  //       res.status(400).json({ error: "ERROR!!!" });
  //     }
  //   } catch (error) {
  //     console.log("🚀 ========= error:", error);
  //   }

  //   // res.render("home");
  // }
  //cach 2
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }
  //[Get] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
