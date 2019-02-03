// Application configuration.

const config = module.exports;

config.db = {
  user: 'root',
  password: '',
  name: 'itgoa',
};

config.db.details = {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
};

config.keys = {
  secret: 'changethis', // Should not be made public
};
