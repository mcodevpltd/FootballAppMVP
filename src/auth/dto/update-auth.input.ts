import { signUpInput } from './signup-input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthInput extends PartialType(signUpInput) {
  @Field(() => Int)
  id: number;
}
