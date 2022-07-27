import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto';

import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    register(@Body() user: NewUserDTO): Promise<UserDetails | null> {
        return this.authService.register(user);
    }

    @Post('login')
    @HttpCode(200)
    login(@Body() user: ExistingUserDTO): Promise<{token: string} | null> {
        return this.authService.login(user);
    }
}
