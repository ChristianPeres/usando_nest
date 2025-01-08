import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuarios/usuario.module';

@Module({
  controllers: [UsuarioModule],
})
export class AppModule {}
 