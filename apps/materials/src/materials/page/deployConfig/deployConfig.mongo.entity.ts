import { Column, CreateDateColumn, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class DeployTestConfig {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ default: null })
  contain: string;

  @CreateDateColumn()
  createTime: string

  @Column()
  pageId: string
}
