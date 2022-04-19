import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { Member } from './entities/member.entity';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';

@Resolver(() => Member)
@UseGuards(RolesGuard)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  // @Mutation(() => Member)
  // createMember(@Args('createMemberInput') createMemberInput: CreateMemberInput) {
  //   return this.memberService.create(createMemberInput);
  // }
  @Query(() => [Member])
  listMember() {
    return this.memberService.findAll();
  }

  // @Query(() => Member, { name: 'member' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.memberService.findOne(id);
  // }

  // @Mutation(() => Member)
  // updateMember(@Args('updateMemberInput') updateMemberInput: UpdateMemberInput) {
  //   return this.memberService.update(updateMemberInput.id, updateMemberInput);
  // }

  // @Mutation(() => Member)
  // removeMember(@Args('id', { type: () => Int }) id: number) {
  //   return this.memberService.remove(id);
  // }
}
