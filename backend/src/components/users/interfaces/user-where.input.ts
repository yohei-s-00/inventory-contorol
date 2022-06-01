import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { StringFilter } from '@ic-@generated/prisma-nestjs-graphql/prisma/string-filter.input';
import { IntFilter } from '@ic-@generated/prisma-nestjs-graphql/prisma/int-filter.input';
import { DateTimeFilter } from '@ic-@generated/prisma-nestjs-graphql/prisma/date-time-filter.input';
import { StringNullableFilter } from '@ic-@generated/prisma-nestjs-graphql/prisma/string-nullable-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @HideField()
    hashedRefreshToken?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
