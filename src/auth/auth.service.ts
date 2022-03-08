import { Injectable } from '@nestjs/common';
import { MembersService } from 'src/members/members.service';

@Injectable()
export class AuthService {
  constructor(private membersService: MembersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.membersService.findByUsername(username);
    if (user && user.password == pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
