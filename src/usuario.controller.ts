import { Body, Controller, Post } from '@nestjs/common';
import { usuarioRepository } from './usuarios.repository';

@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new usuarioRepository
  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    this.usuarioRepository.salvar(dadosDoUsuario)
    return dadosDoUsuario;
  }
}
