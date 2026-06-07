import { useState, useEffect } from 'react'
import axios from 'axios'

export function useCharacters(page = 1) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://dragonball-api.com/api/characters?page=${page}&limit=12`)
      .then((res) => {
        setCharacters(res.data.items)
        setMeta(res.data.meta)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [page])

  return { characters, loading, error, meta }
}