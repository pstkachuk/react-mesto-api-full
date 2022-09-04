const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { auth } = req.cookies;
  if (!auth) {
    throw new UnauthorizedError('Необходимо авторизироваться');
  }
  let payload;

  try {
    payload = jwt.verify(auth, NODE_ENV === 'production' ? JWT_SECRET : 'super-mega-giga-very-very-strong-secret');
  } catch (err) {
    throw new UnauthorizedError('Необходимо авторизироваться');
  }

  req.user = payload;
  next();
};
