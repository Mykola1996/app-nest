import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsActiveToUser1720776916630 implements MigrationInterface {
    name = 'AddIsActiveToUser1720776916630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" DROP DEFAULT`);
    }

}
