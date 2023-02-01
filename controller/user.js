exports.homepage = (req, res) => {
  res.render("index", {
    title: "Home",
  });
};
exports.servicePage = (req, res) => {
  res.render("service", {
    title: "Service",
  });
};
exports.aboutPage = (req, res) => {
  res.render("about", {
    title: "About",
  });
};
