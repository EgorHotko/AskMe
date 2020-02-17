import { Base } from 'db-migrate-base';

exports.up = async function(db: Base): Promise<void> {
  await db.runSql(`CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  photo VARCHAR(255)
  )`);
};

exports.down = function(db: Base) {
  return;
};
