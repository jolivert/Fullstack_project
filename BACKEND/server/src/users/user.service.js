const User = require('./user.model');
//TODO: authenticate
const auth = require('./auth/auth.service');
const { errMalformed, errUnauthorized } = require('../errors');

const createUser = async ({ username, email, password: plaintextPassword, name, surname, userType }) => {
  //TODO: encryption
  const encryptedPassword = await auth.encryptPassword(plaintextPassword);
  console.log(`user.service - createUser: ${username}, ${email}, ${plaintextPassword}`)
  return await User.create({ username, email, password: encryptedPassword, name, surname, userType });
}

const authenticateUser = async ({ email, password }) => {
  if (!email || !password) {
    errMalformed(`Missing email or password`);
  }
  const user = await User.findOne({ email }).select("+password").lean().exec();
  if (!user) {
    errUnauthorized(`Wrong email or password`);
  }
  const passwordMatches = await auth.comparePassword(password, user.password);
  if (!passwordMatches) {
    errUnauthorized(`Wrong email or password`);
  }
  const token = auth.createToken(email);
  return token;
}

const findUserByUsername = async (username) => {
  const user = await User.findOne({ username }).lean().exec();
  if (!user) {
    errUnauthorized(`Wrong email or password`);
  }
  return user._id;
}

module.exports = {
  createUser,
  authenticateUser,
  findUserByUsername,
}