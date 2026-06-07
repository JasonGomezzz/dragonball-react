import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const affiliationColor = {
  'Z Fighter': 'bg-blue-600',
  'Army of Frieza': 'bg-purple-600',
  Freelancer: 'bg-yellow-600',
}

export default function CharacterCard({ character }) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all hover:scale-105">
      <CardHeader className="pb-2">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-44 object-contain bg-gray-900 rounded-md"
          onError={(e) => (e.target.src = 'https://placehold.co/200x200?text=?')}
        />
        <CardTitle className="text-orange-400 text-lg mt-2">{character.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex gap-2 flex-wrap">
          <Badge className="bg-orange-500 text-white">{character.race}</Badge>
          <Badge className={`${affiliationColor[character.affiliation] || 'bg-gray-600'} text-white`}>
            {character.affiliation}
          </Badge>
        </div>
        <p className="text-gray-400 text-sm">
          <span className="text-white font-semibold">Ki: </span>{character.ki}
        </p>
        <p className="text-gray-400 text-sm">
          <span className="text-white font-semibold">Max Ki: </span>{character.maxKi}
        </p>
        <p className="text-gray-400 text-sm">
          <span className="text-white font-semibold">Género: </span>{character.gender}
        </p>
      </CardContent>
    </Card>
  )
}