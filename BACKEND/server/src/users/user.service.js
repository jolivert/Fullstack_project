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
  
  const uid= JSON.stringify(user._id);
  console.log(uid);
  const token = auth.createToken(email, user.userType, uid );
  return token;
}

module.exports = {
  createUser,
  authenticateUser,
}