import { client } from '@/sanity/lib/client'

async function getPage() {
  return await client.fetch(`*[_type == "page"][0]`)
}

export default async function Home() {
  const page = await getPage()

  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Header */}
      <header className="bg-blue-700 text-white px-8 py-4 flex items-center justify-between">
        <span className="text-xl font-bold">Testando</span>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-orange-300">Início</a>
          <a href="#" className="hover:text-orange-300">Sobre</a>
          <a href="#" className="hover:text-orange-300">Contato</a>
        </nav>
      </header>

      {/* Seção Hero */}
      <section className="bg-orange-500 text-white flex flex-col items-center justify-center py-32 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">
          {page?.hero?.titulo || 'Título aqui'}
        </h1>
        <p className="text-xl mb-8">
          {page?.hero?.subtitulo || 'Subtítulo aqui'}
        </p>
        <a href="#" className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800">
          {page?.hero?.textoBotao || 'Botão'}
        </a>
      </section>

      {/* Seção 2 */}
      <section className="bg-white flex flex-col items-center py-24 px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          {page?.secao?.titulo || 'Título da seção'}
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl">
          {page?.secao?.descricao || 'Descrição aqui'}
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-auto">
        <p>© 2025 Testando. Todos os direitos reservados.</p>
      </footer>

    </div>
  )
}