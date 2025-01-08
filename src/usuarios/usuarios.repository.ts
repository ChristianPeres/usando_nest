
export class usuarioRepository {
  private usuarios = [];

  async salvar(usuario) {
    this.usuarios.push(usuario);
    
  }
  async listar(){
    return this.usuarios
  }
}