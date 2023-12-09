import { PartialType } from '@nestjs/mapped-types';
import { CreateMembershipDto } from './create-membership.dto';
import * as Joi from 'joi';

export class UpdateMembershipDto extends PartialType(CreateMembershipDto) {}

export const UpdateMembershipSchema = Joi.object({
  code: Joi.string().optional(),
  start_date: Joi.date().optional(),
  end_date: Joi.date().optional(),
  status: Joi.boolean().optional(),
  member_id: Joi.number().optional()
})