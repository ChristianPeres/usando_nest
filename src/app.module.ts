import { Module } from '@nestjs/common';
import { UsuarioController } from './usuarios/usuario.controller';

@Module({
  controllers: [UsuarioController],
  
})
export class AppModule {}
 