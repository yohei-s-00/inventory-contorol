import { NestFactory } from "@nestjs/core";
import { IcEnv } from "@ic-config/environments/ic-env.service";
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { PrismaService } from './components/prisma/prisma.service';
import { AppModule } from "./app.module";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const winstonLogger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(winstonLogger);
  const icEnv = app.get(IcEnv);

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
  prismaService.enableLogger(winstonLogger);

  await app.listen(icEnv.Port, '0.0.0.0');

  winstonLogger.log(`PORT: ${icEnv.Port}`);

}
bootstrap();
