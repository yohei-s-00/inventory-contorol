import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { validate } from "./env-validator";
import { IcEnv } from "./ic-env.service";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.development.local"],
      validate,
      isGlobal: true,
    }),
  ],
  providers: [IcEnv],
  exports: [IcEnv],
})
export class IcEnvModule {}
