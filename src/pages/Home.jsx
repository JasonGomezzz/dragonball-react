import { useState } from 'react'
import { useCharacters } from '../hooks/useCharacters'
import CharacterCard from '../components/CharacterCard'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [page, setPage] = useState(1)
  const { characters, loading, error, meta } = useCharacters(page)

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-600 to-gray-950 py-20 text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-4">🐉 Dragon Ball Explorer</h1>
        <p className="text-orange-200 text-xl max-w-2xl mx-auto">
          Explora el universo Dragon Ball. Conoce a todos los personajes, sus poderes y afiliaciones del universo 7.
        </p>
        {meta && (
          <p className="text-gray-300 mt-3 text-sm">
            {meta.totalItems} personajes disponibles
          </p>
        )}
      </section>

      {/* Lista */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-orange-400 mb-6">Personajes</h2>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500" />
          </div>
        )}

        {error && <p className="text-red-400 text-center">Error: {error}</p>}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
              <Button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-40"
              >
                ← Anterior
              </Button>
              <span className="text-white">
                Página {page} de {meta?.totalPages}
              </span>
              <Button
                onClick={() => setPage((p) => p + 1)}
                disabled={page === meta?.totalPages}
                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-40"
              >
                Siguiente →
              </Button>
            </div>
          </>
        )}
      </section>
    </main>
  )
}