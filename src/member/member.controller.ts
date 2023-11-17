import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Req, Res } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Response } from 'express';
import * as moment from 'moment';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  @Render('pages/members/index')
  async index(@Req() req: any) {
    const data = await this.memberService.findAll();
    return {
      titlePage: 'Members | Gate System',
      message: 'Member List',
      menu: 'member',
      data: data,
      moment: moment
    }
  }

  @Get('findall')
  findAll() {
    return this.memberService.findAll();
  }

  @Get()
  @Render('pages/members/create')
  createPage(@Body() createMemberDto: CreateMemberDto) {
    return {
      titlePage: 'Create Members | Gate System',
      message: 'Create a new Member',
      menu: 'member',
    }
  }

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto, @Res() res: Response) {
    const data = await this.memberService.create(createMemberDto);
    
    return res.redirect('/member/')
  }

  @Get(':id')
  @Render('pages/members/show')
  async findOne(@Param('id') id: string) {
    const data = await this.memberService.findOne(+id);

    return {
      titlePage: 'Detail Members | Gate System',
      message: 'Create a new Member',
      menu: 'member',
      data: data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto, @Res() res: Response) {
    const data = await this.memberService.update(+id, updateMemberDto);
    return res.redirect(`/member/${data.id}`)
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const data = await this.memberService.remove(+id);
    return res.redirect(`/member/`)
  }
}
