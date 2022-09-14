require('dotenv').config()
module.exports = {
  development: {
    database: 'quizlrback',
    dialect: 'postgres'
  },
  test: {
    database: 'quizlrback',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}