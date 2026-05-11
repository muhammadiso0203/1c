import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  getMetrics() {
    return this.prisma.metric.findMany();
  }

  getDashboardStats() {
    try {
      return this.prisma.dashboardStat.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Malumot olishda xatolik yuz berdi')
    }
  }

  getFinanceStats(){
    try {
      return this.prisma.finansData.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Malumot olishda xatolik yuz berdi')
    }
  }

  getPolucheniyaStats() {
    try {
      return this.prisma.polucheniyaData.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Malumot olishda xatolik yuz berdi');
    }
  }
}

