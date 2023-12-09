import * as Joi from "joi";

export class CreateMembershipDto {
  code: string;
  start_date?: string;
  end_date?: string;
  status?: boolean;
  member_id?: number
}

export const CreateMembershipSchema = Joi.object({
  code: Joi.string().required(),
  start_date: Joi.date().optional(),
  end_date: Joi.date().optional(),
  status: Joi.boolean().optional(),
  member_id: Joi.number().optional()
})
