import { Controller, Get } from '@nestjs/common';
import { Member } from './entities/member.entity';

@Controller('members')
export class MembersController {
  @Get()
  findAll(): Member[] {
    return [] as Member[];
  }
}
