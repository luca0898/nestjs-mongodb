import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Collection } from "mongodb";
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  collection: Collection

  constructor(private readonly database: DatabaseService) {
    this.collection = this.database.db.collection('Users')
  }

  async create(createUserDto: CreateUserDto) {
    return this.collection.insertOne(createUserDto)
  }

  async findAll() {
    return this.collection.find({}, {}).toArray()
  }

  async findOne(name: string) {
    return this.collection.findOne<User>({ name }, {})
  }

  async update(name: string, updateUserDto: UpdateUserDto) {
    return this.collection.replaceOne({ name }, updateUserDto)
  }

  async remove(name: string) {
    return this.collection.deleteOne({ name })
  }
}
