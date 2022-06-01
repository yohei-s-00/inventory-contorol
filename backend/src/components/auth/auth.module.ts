import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '@ic-components/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from "@nestjs/jwt";
import { AuthResolver } from '@ic-components/auth/auth.resolver'
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({})
  ],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy, JwtRefreshStrategy]
})
export class AuthModule {}