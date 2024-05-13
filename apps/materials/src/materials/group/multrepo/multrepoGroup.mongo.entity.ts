import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class MultrepoGroup {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ default: null })
  name: string;

  @Column({ default: null })
  desc: string;

  @Column()
  creatorName: string;

  @Column()
  creatorId: number;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @Column()
  status: number;

}
