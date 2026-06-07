import { useState } from 'react'
import { useCharacters } from '../hooks/useCharacters'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Entities() {
  const [page, setPage] = useState(1)
  const { characters, loading, error, meta } = useCharacters(page)

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-orange-400 mb-2">📜 Entities</h1>
      <p className="text-gray-400 mb-6">Lista de personajes con sus propiedades principales.</p>

      {loading && (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500" />
        </div>
      )}

      {error && <p className="text-red-400">Error: {error}</p>}

      {!loading && !error && (
        <>
          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-800 text-orange-400 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3">Personaje</th>
                  <th className="px-4 py-3">Raza</th>
                  <th className="px-4 py-3">Ki</th>
                  <th className="px-4 py-3">Max Ki</th>
                  <th className="px-4 py-3">Género</th>
                  <th className="px-4 py-3">Afiliación</th>
                </tr>
              </thead>
              <tbody>
                {characters.map((char, i) => (
                  <tr
                    key={char.id}
                    className={`border-t border-gray-700 hover:bg-gray-800 transition ${
                      i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-950'
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={char.image}
                          alt={char.name}
                          className="w-10 h-10 object-contain rounded-full bg-gray-700"
                          onError={(e) => (e.target.src = 'https://placehold.co/40x40?text=?')}
                        />
                        <span className="text-white font-semibold">{char.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-300">{char.race}</td>
                    <td className="px-4 py-3 text-gray-300">{char.ki}</td>
                    <td className="px-4 py-3 text-gray-300">{char.maxKi}</td>
                    <td className="px-4 py-3 text-gray-300">{char.gender}</td>
                    <td className="px-4 py-3">
                      <Badge className="bg-orange-500 text-white text-xs">
                        {char.affiliation}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
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
    </main>
  )
}