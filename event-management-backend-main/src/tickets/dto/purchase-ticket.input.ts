import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PurchaseTicketInput {
  @Field(() => Int)
  ticketId: number;

  @Field(() => Int)
  quantity: number;
}
