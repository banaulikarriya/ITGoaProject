// Application configuration.

const config = module.exports;

config.db = {
  user: 'itgoadb',
  password: 'it-#goa19',
  name: 'itgoadb',
};

config.db.details = {
  host: 'itgoadb.cwcizbahiang.us-east-2.rds.amazonaws.com',
  port: 3306,
  dialect: 'mysql',
};

config.keys = {
  secret: 'changethis', // Should not be made public
};
