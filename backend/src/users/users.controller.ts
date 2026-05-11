import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('dashboards')
  @ApiOperation({ summary: 'Get dashboard metrics' })
  @ApiResponse({ status: 200, description: 'Return dashboard metrics.' })
  getMetrics() {
    return this.usersService.getMetrics();
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get dashboard stats' })
  @ApiResponse({ status: 200, description: 'Return dashboard stats.' })
  getDashboardStats() {
    return this.usersService.getDashboardStats();
  }

  @Get('financeStat')
  @ApiOperation({ summary: 'Get finance stats' })
  @ApiResponse({ status: 200, description: 'Return finance stats.' })
  getFinanceStats() {
    return this.usersService.getFinanceStats();
  }

  @Get('polucheniyaStat')
  @ApiOperation({ summary: 'Get polucheniya stats' })
  @ApiResponse({ status: 200, description: 'Return polucheniya stats.' })
  getPolucheniyaStats() {
    return this.usersService.getPolucheniyaStats();
  }
}

