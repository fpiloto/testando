export default function Header() {
  return (
    <header className="bg-blue-700 text-white px-8 py-4 flex items-center justify-between">
      <span className="text-xl font-bold">Testando</span>
      <nav className="flex gap-6">
        <a href="/" className="hover:text-orange-300">Início</a>
        <a href="/sobre" className="hover:text-orange-300">Sobre</a>
        <a href="#" className="hover:text-orange-300">Contato</a>
      </nav>
    </header>
  )
}