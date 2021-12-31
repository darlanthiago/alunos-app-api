require("dotenv").config();

module.exports = {
  /* SQLite */
  dialect: process.env.DATABASE_DRIVER,
  // storage: './db.sqlite',

  /* MySQL / MariaDB */
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: "America/Sao_Paulo",
  },
  timezone: "America/Sao_Paulo",

  /* ALL */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  production: {
    dialect: process.env.DATABASE_DRIVER,
    protocol: process.env.DATABASE_DRIVER,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
