import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { AuthModule } from './auth/auth.module';
import { StatesModule } from './states/states.module';
import { CitiesModule } from './cities/cities.module';
import { RankingModule } from './ranking/ranking.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_mrtenis',
      password: 'root',
      database: 'db_mrtenis',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PlayersModule,
    AuthModule,
    StatesModule,
    CitiesModule,
    RankingModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
