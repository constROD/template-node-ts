import { MigrationInterface, QueryRunner } from 'typeorm';

export class noName1669198637377 implements MigrationInterface {
  name = 'noName1669198637377';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "main"."tests" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdById" uuid, "updatedById" uuid, "deletedById" uuid, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "main"."tests"`);
  }
}
