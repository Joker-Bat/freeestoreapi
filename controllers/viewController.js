exports.homePage = (req, res, next) => {
  res.status(200).render('home');
};

exports.docsPage = (req, res, next) => {
  res.status(200).render('docs');
};
