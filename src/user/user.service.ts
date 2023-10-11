import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    private users: User[] = [];

  findAll() {
    return this.users;
  }

  create(data: { name: string, email: string }) {

    this.users.push(data);

    return data;
  }
}
