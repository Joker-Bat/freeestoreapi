exports.homePage = (req, res, next) => {
  res.status(200).render('home', {
    title: 'Homepage',
  });
};

exports.docsPage = (req, res, next) => {
  res.status(200).render('docs', {
    title: 'Documentation',
  });
};
