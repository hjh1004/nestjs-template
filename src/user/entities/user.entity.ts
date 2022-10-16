import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  Model,
  AllowNull,
  Unique,
  IsEmail,
} from 'sequelize-typescript';

@Table({
  tableName: 'user',
  createdAt: false,
  updatedAt: false,
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
    id: number;

  @Column(DataType.STRING({ length: 128 }))
    name: string;

  @Unique
  @AllowNull(false)
  @IsEmail
  @Column(DataType.STRING({ length: 255 }))
    email: string;
}
