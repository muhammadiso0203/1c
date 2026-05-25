import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    try {
      const data = await this.prisma.user.findMany();
      if (!data || data.length === 0) {
        throw new NotFoundException("Foydalanuvchilar topilmadi");
      }
      return data;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Foydalanuvchilarni olishda xatolik yuz berdi');
    }
  }

  async getMetrics() {
    try {
      const data = await this.prisma.metric.findMany();
      if (!data || data.length === 0) {
        throw new NotFoundException("Metrikalar topilmadi");
      }
      return data;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Metrikalarni olishda xatolik yuz berdi');
    }
  }

  async getDashboardStats() {
    try {
      const data = await this.prisma.dashboardStat.findMany();
      if (!data || data.length === 0) {
        throw new NotFoundException("Dashboard statistikasi topilmadi");
      }
      return data;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Malumot olishda xatolik yuz berdi');
    }
  }

  async getFinanceStats() {
    try {
      const data = await this.prisma.finansData.findMany();
      if (!data || data.length === 0) {
        throw new NotFoundException("Moliya statistikasi topilmadi");
      }
      return data;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Malumot olishda xatolik yuz berdi');
    }
  }

  async getPolucheniyaStats() {
    try {
      const data = await this.prisma.polucheniyaData.findMany();
      if (!data || data.length === 0) {
        throw new NotFoundException("Qabul qilish statistikasi topilmadi");
      }
      return data;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Malumot olishda xatolik yuz berdi');
    }
  }

  async getSoliqStat() {
    try {
      const data = await this.prisma.soliqData.findMany();
      if (!data || data.length === 0) {
        throw new NotFoundException("Soliq statistikasi topilmadi");
      }
      return data;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Malumot olishda xatolik yuz berdi');
    }
  }
}


