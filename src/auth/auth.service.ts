import { Injectable } from '@nestjs/common';
import { signUpInput } from './dto/signup-input';
import { UpdateAuthInput } from './dto/update-auth.input';

@Injectable()
export class AuthService {
  create(signUpInput: signUpInput) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
