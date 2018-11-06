module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'app_tracker',
    user: process.env.DB_USER || 'app_tracker',
    password: process.env.DB_PASSWORD || 'app_tracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './app_tracker.sqlite'
    }
  }
}
