import 'dotenv/config';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { usersData, dashboardData, dashboardStat, finansData, polucheniyaData } from '../data/users.data';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    super({ adapter });
    this.pool = pool;
  }

  async onModuleInit() {
    await this.$connect();
    await this.seed();
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.pool.end(); 
  }

  private async seed() {
    const [userCount, metricCount, statCount, finansCount, polucheniyaCount] = await Promise.all([
      this.user.count(),
      this.metric.count(),
      this.dashboardStat.count(),
      this.finansData.count(),
      this.polucheniyaData.count(),
    ]);

    await Promise.all([
      userCount === 0 ? this.user.createMany({ data: usersData }) : null,
      metricCount === 0 ? this.metric.createMany({ data: dashboardData }) : null,
      statCount === 0 ? this.dashboardStat.createMany({ data: dashboardStat }) : null,
      finansCount === 0 ? this.finansData.createMany({ data: finansData }) : null,
      polucheniyaCount === 0 ? this.polucheniyaData.createMany({ data: polucheniyaData }) : null,
    ]);
  }
}