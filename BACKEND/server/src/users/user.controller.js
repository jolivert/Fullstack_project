//TODO: authenticate user
const { needsAuthToken } = require("./auth/auth.middleware");
const { catchErrors, TeamMgmtApiError} = require("../errors");
const users = require("./user.service");
//TODO: config.js
//const config = require("../config");

const login = async (req, res) => {
  const loginData = req.body;
  //TODO: authenticate user
  const token = await users.authenticateUser(loginData);
  res.status(200).json(token);
};

const register = async (req, res) => {
  const userData = req.body;
  try {
    console.log("user.controller - register");
    await users.createUser(userData);
  } catch (e) {
    switch (e.name) {
      case "MongoServerError": {
        switch (e.code) {
          case 11000:
            throw new TeamMgmtApiError(400, `User exists`);
          default:
            throw e;
        }
      }
      default:
        throw e;
    }
  }
  res.status(200).json({ status: `User created` });
};

const test = async (req, res) => {
  res.status(200).json({ ok: true, user: req.userEmail });
};

const addRoutesTo = (app) => {
  app.post("/login", catchErrors(login));
  app.post("/register", catchErrors(register));
  //TODO: isDevelopment necessary?
  /*if (config.isDevelopment) {
    app.get("/test", needsAuthToken, catchErrors(test));
  }*/
};

module.exports = {
  addRoutesTo,
};