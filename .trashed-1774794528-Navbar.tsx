import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Master AI Tool
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link href="#tools" className="text-gray-300 hover:text-white transition">
            Tools
          </Link>
        </div>
      </div>
    </nav>
  )
}