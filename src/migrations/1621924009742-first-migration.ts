import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1621924009742 implements MigrationInterface {
    name = 'firstMigration1621924009742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."guest" ("id" SERIAL NOT NULL, "name" character varying(1000) NOT NULL, "address" character varying(10000) NOT NULL, "guest_of" character(1) NOT NULL, "person_qty" smallint NOT NULL, CONSTRAINT "PK_65d4ec63f8b3bed76e299665016" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "_guest_id_index" ON "public"."guest" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."attendance" ("id" SERIAL NOT NULL, "guest_id" integer NOT NULL, "gift" boolean NOT NULL, "gift_ammount" integer NOT NULL, "time_arrive" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "person_qty" smallint NOT NULL, CONSTRAINT "REL_925f571d038eefdc6ca0b2e353" UNIQUE ("guest_id"), CONSTRAINT "PK_320717945d3e44d1d97596c0e10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "_attendance_id_index" ON "public"."attendance" ("id") `);
        await queryRunner.query(`ALTER TABLE "public"."attendance" ADD CONSTRAINT "FK_925f571d038eefdc6ca0b2e3537" FOREIGN KEY ("guest_id") REFERENCES "public"."guest"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."attendance" DROP CONSTRAINT "FK_925f571d038eefdc6ca0b2e3537"`);
        await queryRunner.query(`DROP INDEX "public"."_attendance_id_index"`);
        await queryRunner.query(`DROP TABLE "public"."attendance"`);
        await queryRunner.query(`DROP INDEX "public"."_guest_id_index"`);
        await queryRunner.query(`DROP TABLE "public"."guest"`);
    }

}
