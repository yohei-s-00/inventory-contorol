import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ApolloDriverConfig } from "@nestjs/apollo";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { LoggingWinston } from "@google-cloud/logging-winston";
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModuleOptions,
} from "nest-winston";
import winston from "winston";
import path from "path";

@Injectable()
export class IcEnv {
  constructor(private configService: ConfigService) {}

  isProduction(): boolean {
    return this.configService.get("NODE_ENV") === "production";
  }

  get service() {
    return this.configService;
  }

  get NodeEnv(): string {
    return this.configService.get("NODE_ENV");
  }

  get Port(): number {
    return this.configService.get("PORT");
  }

  get DatabaseUrl(): string {
    return this.configService.get("DATABASE_URL");
  }

  get PrismaOptionsFactory(): PrismaClientOptions {
    const logOptions = {
      development: [
        { emit: "event", level: "query" },
        { emit: "event", level: "info" },
        { emit: "event", level: "warn" },
      ],
      production: [{ emit: "event", level: "warn" }],
      test: [
        { emit: "event", level: "info" },
        { emit: "event", level: "warn" },
      ],
    };
    console.log(this.NodeEnv);
    return {
      errorFormat: "colorless",
      rejectOnNotFound: true,
      log: logOptions[this.NodeEnv],
    };
  }

  get GqlModuleOptionsFactory(): ApolloDriverConfig {
    // 開発：コードからスキーマを生成し、Playgroundも利用する。
    // バックエンドのコードが正なのでコードファーストアプローチを使う
    const devOptions: ApolloDriverConfig = {
      autoSchemaFile: path.join(
        process.cwd(),
        "src/generated/graphql/schema.gql"
      ),
      sortSchema: true,
      debug: true,
      playground: true,
    };

    const prdOptions: ApolloDriverConfig = {
      autoSchemaFile: true,
      debug: false,
      playground: false,
    };
    if (this.isProduction()) {
      return prdOptions;
    } else {
      return devOptions;
    }
  }

  get WinstonModuleOptionsFactory(): WinstonModuleOptions {
    const loggingConsole = new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.errors({ stack: true }),
        nestWinstonModuleUtilities.format.nestLike("IC_BACKEND", {
          prettyPrint: true,
        })
      ),
    });
    const loggingCloudLogging = new LoggingWinston({
      serviceContext: {
        service: "ic-backend",
        version: "1.0.0",
      },
    });
    return {
      level: this.isProduction() ? "info" : "debug",
      transports: this.isProduction()
        ? [loggingConsole, loggingCloudLogging]
        : [loggingConsole],
    };
  }
}
