import { client } from '@/sanity/lib/client'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'


async function getSobre() {
  return await client.fetch(`*[_type == "sobre"][0]`)
}

export default async function Sobre() {
  const sobre = await getSobre()

  return (
    <div className="min-h-screen flex flex-col font-sans">

    <Header />

      {/* Hero */}
      <section className="bg-black text-white flex flex-col items-center justify-center py-32 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">
          {sobre?.hero?.titulo || 'Título aqui'}
        </h1>
        <p className="text-xl text-zinc-400">
          {sobre?.hero?.subtitulo || 'Subtítulo aqui'}
        </p>
      </section>

      {/* Conteúdo */}
      <section className="bg-black text-white flex flex-col items-center py-24 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {sobre?.conteudo?.titulo || 'Título da seção'}
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl">
          {sobre?.conteudo?.texto || 'Texto aqui'}
        </p>
      </section>

    <Footer />

    </div>
  )
}