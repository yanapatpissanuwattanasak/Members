import { MigrationInterface, QueryRunner } from 'typeorm';

export class createMembersTable1650164988346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      'CREATE TABLE member (id INT(11) AUTO_INCREMENT PRIMARY KEY ,firstname VARCHAR(255) NOT NULL,lastname VARCHAR(255) NOT NULL , address VARCHAR(255) NOT NULL , district VARCHAR(255) NOT NULL, post VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DROP TABLE member;');
  }
}
