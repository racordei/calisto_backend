import dotenv from 'dotenv'
import { Dialect, Sequelize } from 'sequelize'

dotenv.config({
  path: (process.env.NODE_ENV || 'development') == 'development'
    ? '.env.dev'
    : (process.env.NODE_ENV == 'test' ? '.env.test' : '.env')
})

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbPort = parseInt(process.env.DB_PORT as string) as number
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDriver,
  define: {
    timestamps: true
  },
  logging: (process.env.NODE_ENV || 'development') === 'development' ? console.log : false
})

export default sequelizeConnection