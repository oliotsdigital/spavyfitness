import { Flame } from 'lucide-react';
import { CHALLENGES } from '../../data/constants';
import ChallengeCard from './ChallengeCard';

export default function ChallengesGrid() {
  return (
    <div>
      <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-2">
        <Flame className="w-5 h-5 text-red-500" /> SPAVY ONLINE CHALLENGES
      </h3>
      <p className="text-xs text-zinc-400 mb-6">
        Compete from any gym across the world, submit your score, and lock your name on the Spavy
        Leaderboard.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {CHALLENGES.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
