import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type TeamMemberDocument = TeamMember & Document;

@Schema()
export class TeamMember {
  @ApiProperty()
    @Prop({ required: true })
    firstName!: string;

  @ApiProperty()
    @Prop({ required: true })
    lastName!: string;

  @ApiProperty()
    @Prop({ required: true })
    phoneNumber!: string;

  @ApiProperty()
    @Prop({ required: true })
    email!: string;

  @ApiProperty()
    @Prop({ required: true, enum: ['admin', 'user'] })
    role!: string;
}

export const TeamMemberSchema = SchemaFactory.createForClass(TeamMember);
