export interface Post {
  _id?: string
  usuarioID: string
  conteúdo: string
  dataDePublicacao: Date
  comentarios: {
    comentarioID: string
    conteudo: string
    usuarioID: string
    dataDoComentario: Date
  }[]
  interações: {
    tipo: string
    usuarioID: string
  }[]
}
