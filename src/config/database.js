module.exports = {
  development: {
    dialect: 'mariadb',
    username: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: 'chord',
    host: 'localhost',
    port: process.env.MARIADB_PORT,
    define: {
      timestamps: true
    },
  },
  production: {
    dialect: 'mariadb',
    username: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: 'chord',
    host: 'calisto_mariadb',
    define: {
      timestamps: true,
    },
    logging: false,
  }
}