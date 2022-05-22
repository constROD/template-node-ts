import { CommonEntity } from './Common';

import { ORM_DB_SCHEMA } from '../shared/configs/App';
import { Tables } from '../shared/constants/Tables';

import { Column, Entity } from 'typeorm';

@Entity(Tables.Tests, { schema: ORM_DB_SCHEMA })
export class TestEntity extends CommonEntity {
  @Column({ nullable: false })
  name: string;
}
