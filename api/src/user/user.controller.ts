import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { UserDetails } from './user-details.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get(':id')
    getUser(@Param('id') id: string): Promise<UserDetails | null> {
        return this.userService.findById(id);
    }

    @UseGuards(JwtGuard)
    @Get('/secret/message')
    getSecret(): string {
        return 'This is the secret message';
    }
}
