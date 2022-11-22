import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class CommonEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: true })
  createdById: number;

  @Column({ type: 'uuid', nullable: true })
  updatedById: number;

  @Column({ type: 'uuid', nullable: true })
  deletedById: number;

  @CreateDateColumn({ nullable: true })
  createdAt: Date | string;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date | string;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | string;
}
