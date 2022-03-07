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
  async findAll(): Promise<Member[]> {
    return await this.memberSerivce.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) memberId: number): Promise<Member> {
    return await this.memberSerivce.findById(memberId);
  }

  @Post()
  create(@Body() memberData: CreateMemberDto) {
    return this.memberSerivce.join(memberData);
  }
}
