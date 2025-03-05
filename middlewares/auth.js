async function checkUser(req, res, next) {
  const user = req.session.user;
  if (!user) {
    req.flash("error", "Please Log In");
    return res.redirect("/login");
  }
  next();
}
module.exports = checkUser;
