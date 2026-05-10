import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sobre',
  title: 'Página Sobre',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'titulo', title: 'Título', type: 'string'}),
        defineField({name: 'subtitulo', title: 'Subtítulo', type: 'string'}),
      ],
    }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo',
      type: 'object',
      fields: [
        defineField({name: 'titulo', title: 'Título', type: 'string'}),
        defineField({name: 'texto', title: 'Texto', type: 'text'}),
      ],
    }),
  ],
})