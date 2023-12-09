import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Membership } from './entities/membership.entity';
import { Repository } from 'typeorm';
import { CreatedResponse, OkResponse } from 'src/utils/response';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership)
    private readonly membershipRepository: Repository<Membership>
  ) {}
  async create(createMembershipDto: CreateMembershipDto) {
    const membership = this.membershipRepository.create({
      code: createMembershipDto.code,
      start_date: createMembershipDto.start_date,
      end_date: createMembershipDto.end_date,
      status: createMembershipDto.status,
      member_id: createMembershipDto.member_id
    })
    await this.membershipRepository.save(membership)
    return new CreatedResponse({
      data: membership
    })
  }

  async findAll() {
    return new OkResponse({
      data: await this.membershipRepository.find()
    })
  }

  async findOne(id: number) {
    return new OkResponse({
      data: await this.membershipRepository.findOne({
        where: {
          id: id
        }
      })
    })
  }

  async update(id: number, updateMembershipDto: UpdateMembershipDto) {
    const membership = await this.membershipRepository.findOne({
      where: {
        id: id
      }
    })
    if (!membership) {
      throw new NotFoundException("Membership not found!!")
    }
    await this.membershipRepository.update({
      id: membership.id
    }, {
      code: updateMembershipDto.code,
      start_date: updateMembershipDto.start_date,
      end_date: updateMembershipDto.end_date,
      status: updateMembershipDto.status,
      member_id: updateMembershipDto.member_id
    });
    return new OkResponse({
      message: "Member updated",
      data: await this.membershipRepository.findOne({
        where: {
          id: id
        }
      })
    })
  }

  async remove(id: number) {
    const membership = await this.membershipRepository.findOne({
      where: {
        id: id
      }
    })
    if (!membership) {
      throw new NotFoundException("Member not found!!")
    }
    await this.membershipRepository.delete(membership);
    return new OkResponse({
      message: "Member deleted",
      data: membership
    })
  }

  async setMember(id: number, member_id: number) {
    const membership = await this.membershipRepository.findOne({
      where: { id: id }
    })

    membership.member_id = null
    await this.membershipRepository.save(membership)
    return new OkResponse({
      message: `This membership removed from member #${id}`,
      data: membership
    })
  }

  async removeMember(id: number) {
    const membership = await this.membershipRepository.findOne({
      where: { id: id }
    })

    membership.member_id = null
    await this.membershipRepository.save(membership)
    return new OkResponse({
      message: `This membership removed from member #${id}`,
      data: membership
    })
  }
}
