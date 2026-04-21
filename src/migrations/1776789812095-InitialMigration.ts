import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1776789812095 implements MigrationInterface {
    name = 'InitialMigration1776789812095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "cat" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL, "breed" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cat"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
