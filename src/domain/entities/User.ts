export interface User {
  _id?: string
  nome: string
  username: string
  senha: string
  email: string
  dataDeCriacao: Date
  dataDeNascimento: Date
  interessesEValores: string[] // Array de IDs
  configuracoesDePrivacidade: {
    visualizarPerfil: string
    visualizarPosts: string
  }
}
