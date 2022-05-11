const passport = require('passport'); // importing Passport
const {Strategy, ExtractJwt} = require('passport-jwt'); // importing Passport-jwt
const config = require('./config');

module.exports = app => {
  const Users = app.models.users; // importing users from models
  const {jwt} = config; // importing jwt from config file

  const params = {
    secretOrKey: jwt.secret,
    jwtFromRequest: ExtractJwt.fromHeader('Authorization')
  };

  passport.use(
    new Strategy(params, async (payload, done) => {
      try {
        const {id} = payload;
        const attributes = ['id', 'email'];
        const options = {attributes};
        const user = await Users.findByPk(id, options);
        done(null, user); // done(null, {id: user.id, email: user.email})
      } catch (err) {
        done(err, null);
      }
    })
  );

  return {
    initialize: () => passport.initialize(), // initialize Passport
    authenticate: () => passport.authenticate('jwt', jwt.options) // Authenticates access to a route
  };
};

/*

The middleware will run on app loading an receives a payload on its callback. This payload is a JSON which is decoded by the secret key on config.jwt.secret
This payload has the id attribute, which will be the user id that will be consulted by Users.findByPk(id)
This logic will be injected via passport.use(new Strategy()).

This file must be loaded before middlewares and routes via consign

*/
