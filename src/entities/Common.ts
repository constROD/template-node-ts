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

  @Column({ nullable: true })
  createdById: number;

  @Column({ nullable: true })
  updatedById: number;

  @Column({ nullable: true })
  deletedById: number;

  @CreateDateColumn({ nullable: true })
  createdAt: Date | string;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date | string;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | string;
}
