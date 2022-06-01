import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './components/users/users.module';
import { ApolloDriver } from '@nestjs/apollo';
import { WinstonModule } from 'nest-winston';
import { PrismaModule } from '@ic-components/prisma/prisma.module';
import { IcEnvModule } from './config/environments/ic-env.module';
import { IcEnv } from '@ic-config/environments/ic-env.service';
import { InventoriesModule } from './components/inventories/inventories.module';
import { OrderModule } from '@ic-components/orders/orders.module';
import { AuthModule } from '@ic-components/auth/auth.module';

@Module({
  imports: [
    IcEnvModule,
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      inject: [IcEnv],
      useFactory: (env: IcEnv) => env.GqlModuleOptionsFactory,
    }),
    WinstonModule.forRootAsync({
      inject: [IcEnv],
      useFactory: (env: IcEnv) => env.WinstonModuleOptionsFactory,
    }),
    PrismaModule.forRootAsync({
      imports: [WinstonModule],
      inject: [IcEnv],
      isGlobal: true,
      useFactory: (env: IcEnv) => ({
        prismaOptions: env.PrismaOptionsFactory,
      }),
    }),
    UsersModule,
    InventoriesModule,
    OrderModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
