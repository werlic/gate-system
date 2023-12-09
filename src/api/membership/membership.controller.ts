import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMembershipDto, CreateMembershipSchema } from './dto/create-membership.dto';
import { UpdateMembershipDto, UpdateMembershipSchema } from './dto/update-membership.dto';
import { JoiValidationPipe } from 'src/utils/pipes/joi-validation';

@Controller('api/membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post()
  create(@Body(new JoiValidationPipe(CreateMembershipSchema)) createMembershipDto: CreateMembershipDto) {
    return this.membershipService.create(createMembershipDto);
  }

  @Get()
  findAll() {
    return this.membershipService.findAll();
  }

  @Get('show/:id')
  findOne(@Param('id') id: string) {
    return this.membershipService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body(new JoiValidationPipe(UpdateMembershipSchema)) updateMembershipDto: UpdateMembershipDto) {
    return this.membershipService.update(+id, updateMembershipDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.membershipService.remove(+id);
  }

  @Patch('set-member/:id')
  setMember(@Param('id') id: string, @Body('member_id') member_id: string) {
    return this.membershipService.setMember(+id, +member_id);
  }

  @Delete('remove-member/:id')
  removeMember(@Param('id') id: string) {
    return this.membershipService.removeMember(+id);
  }
}
