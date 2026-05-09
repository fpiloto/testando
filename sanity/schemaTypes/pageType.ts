import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Página',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Seção Hero',
      type: 'object',
      fields: [
        defineField({name: 'titulo', title: 'Título', type: 'string'}),
        defineField({name: 'subtitulo', title: 'Subtítulo', type: 'string'}),
        defineField({name: 'textoBotao', title: 'Texto do Botão', type: 'string'}),
      ],
    }),
    defineField({
      name: 'secao',
      title: 'Seção 2',
      type: 'object',
      fields: [
        defineField({name: 'titulo', title: 'Título', type: 'string'}),
        defineField({name: 'descricao', title: 'Descrição', type: 'text'}),
      ],
    }),
  ],
})