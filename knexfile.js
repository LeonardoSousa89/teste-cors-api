// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'app1',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 5,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:'ec2-44-192-245-97.compute-1.amazonaws.com',
      database: 'd69kc8k5gtjg1',
      user:     'yjgnewbtubiiyx',
      password: 'fc23b981dbe550d35ee0c56a9c5d978a664ed07f6a5e1ab32fcc959b705cdb29',
      ssl:{rejectUnauthorized:true}
    },
    pool: {
      min: 5,
      max: 10
    }
  }

};
