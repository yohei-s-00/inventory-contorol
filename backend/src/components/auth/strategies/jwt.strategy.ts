import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserModel } from '@ic-components/users/interfaces/user.model';
import { UsersService } from '@ic-components/users/users.service';
import { JwtPayload } from '../types/jwt-payload.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        })
    }

    async validate(payload: JwtPayload): Promise<UserModel | null> {
        return this.usersService.findUnique({where: {email: payload.email}});
    }
}