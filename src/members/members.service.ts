import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member) private memberRepository: Repository<Member>,
  ) {}

  async join(memberData: CreateMemberDto) {
    const member = instanceToPlain(memberData);
    await this.memberRepository.save(plainToInstance(Member, member));
  }

  findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  findById(id: number): Promise<Member> {
    return this.memberRepository.findOne(id, { relations: ['articles'] });
  }
}
