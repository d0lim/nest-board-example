import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MembersModule } from 'src/members/members.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [MembersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
