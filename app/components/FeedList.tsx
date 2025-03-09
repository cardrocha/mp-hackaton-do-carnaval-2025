import type { Bloquinho } from '@/types/types';
import { Clock3, MapPin } from 'lucide-react';

interface FeedListProps {
  blocos: Bloquinho[];
  onUpdateBlocos: (formData: FormData) => void;
}

export function FeedList({ blocos, onUpdateBlocos }: FeedListProps) {
  return (
    <div>
      {blocos.length > 0 ? (
        blocos.map((bloquinho) => (
          <article key={bloquinho.id} className="bg-fuchsia-800 text-white p-4 my-2.5 rounded-lg">
            <h2 className="text-lg font-bold">{bloquinho.title}</h2>
            <p className="text-sm font-light mb-2">{bloquinho.description}</p>

            <span className="flex items-center gap-2">
              <MapPin className="text-yellow-400" size={16} />
              {bloquinho.complete_address}
            </span>

            <div className="flex items-center justify-between mt-2">
              <span className="flex items-center gap-2">
                <Clock3 className="text-yellow-400" size={16} />
                {new Date(bloquinho.date_time).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}{' '}
                -{' '}
                {new Date(bloquinho.date_time).toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
              <span className="bg-blue-600 px-3 py-1 rounded-full">
                {bloquinho.price || 'Grátis'}
              </span>
            </div>
          </article>
        ))
      ) : (
        <p className="text-center text-gray-400">Nenhum bloco encontrado.</p>
      )}
    </div>
  );
}
