/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';

@Controller('/usuarios')
export class UsuarioController {
  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    return dadosDoUsuario;
  }
}
