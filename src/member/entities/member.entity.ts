import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Member {
  @PrimaryColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  lastname: string;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field()
  district: string;

  @Column()
  @Field()
  post: string;

  @Column()
  @Field()
  phone: string;
}
