import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';
import { CreatedResponse, OkResponse } from 'src/utils/response';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member) private readonly memberRepository: Repository<Member>
  ) {}
  async create(createMemberDto: CreateMemberDto) {
    const member = this.memberRepository.create({
      name: createMemberDto.name,
      phone: createMemberDto.no_telp,
      address: createMemberDto.address
    })
    await this.memberRepository.save(member)
    return new CreatedResponse({
      data: member
    })
  }

  async findAll() {
    return new OkResponse({
      data: await this.memberRepository.find()
    })
  }

  async findOne(id: number) {
    return new OkResponse({
      data: await this.memberRepository.findOne({
        where: {
          id: id
        }
      })
    })
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    const member = await this.memberRepository.findOne({
      where: {
        id: id
      }
    })
    if (!member) {
      throw new NotFoundException("Member not found!!")
    }
    member.name = updateMemberDto.name
    member.phone = updateMemberDto.no_telp;
    member.address  = updateMemberDto.address
    await this.memberRepository.save(member);
    return new OkResponse({
      message: "Member updated",
      data: member
    })
  }

  async remove(id: number) {
    const member = await this.memberRepository.findOne({
      where: {
        id: id
      }
    })
    if (!member) {
      throw new NotFoundException("Member not found!!")
    }
    await this.memberRepository.delete(member);
    return new OkResponse({
      message: "Member deleted",
      data: member
    })
  }
}
