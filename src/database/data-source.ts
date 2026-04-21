import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: process.env.DATABASE_NAME ?? 'cats.sqlite3',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
});
