exports.homePage = (req, res, next) => {
  res.status(200).render('second', {
    title: 'Home',
    heading: 'How is it',
  });
};
