import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PlayersModule } from 'src/players/players.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';

@Module({
  imports:[
    PlayersModule,
    JwtModule.register({
      global: true, // cualquier servicio  puede utulizar JWT
      secret: jwtConstants.secret, // el secret es la palabra secreta que se ocupa el JWT para verificar que el token se generó es correcto
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
