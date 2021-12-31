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
  charset: "utf8mb4",
  dialectOptions: {
    timezone: "-03:00",
  },
  timezone: "-03:00",
  /* ALL */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};
