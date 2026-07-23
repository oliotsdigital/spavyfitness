import type { Challenge } from '../../types';

interface ChallengeCardProps {
  challenge: Challenge;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-700 transition shadow-sm">
      <h4 className="font-extrabold text-zinc-900 dark:text-white text-sm uppercase">{challenge.title}</h4>
      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1">{challenge.desc}</p>
      <span className="inline-block text-[10px] text-red-600 dark:text-red-400 font-mono mt-2 font-bold">
        Record: {challenge.record}
      </span>
    </div>
  );
}
