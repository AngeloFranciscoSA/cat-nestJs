import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const baseDir = join(process.cwd(), 'src');

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: process.env.DATABASE_NAME ?? 'cats.sqlite',
  entities: [join(baseDir, '**/*.entity{.ts,.js}')],
  migrations: [join(baseDir, 'database/migrations/*{.ts,.js}')],
  synchronize: false,
});
