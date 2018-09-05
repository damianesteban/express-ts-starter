module.exports = {
  development: {
    client: 'postgres',
    connection: {
      charset: 'utf8',
      timezone: 'UTC',
      host: 'localhost',
      port: 5432,
      database: 'testeroo',
      user: 'postgres',
      password: 'postgres',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'src/database/migrations',
      tableName: 'migrations',
    },
    seeds: {
      directory: 'src/database/seeds',
      stub: 'src/resources/stubs/seed.stub',
    },
  },
};
