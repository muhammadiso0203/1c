import { ApiProperty } from '@nestjs/swagger';

export class Prisma {
  @ApiProperty({ example: 1, description: 'The unique identifier of the user' })
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: '+998901234567', description: 'The phone number of the user' })
  phone: string;
}
