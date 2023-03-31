import { Injectable } from '@nestjs/common';
import { Db, MongoClient } from "mongodb";

@Injectable()
export class DatabaseService {
    db: Db

    constructor() {
        const client = new MongoClient("mongodb://localhost:27017");
        
        this.db = client.db('MyApp')
    }
}