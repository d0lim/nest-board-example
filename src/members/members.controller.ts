import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { Member } from './entities/member.entity';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private readonly memberSerivce: MembersService) {}

  @Get()
  findAll(): Member[] {
    return [] as Member[];
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) memberId: number): Member {
    return { id: memberId } as Member;
  }

  @Post()
  create(@Body() memberData: CreateMemberDto) {
    return this.memberSerivce.join(memberData);
  }
}
