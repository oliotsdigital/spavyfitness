import InvitationalCard from './InvitationalCard';
import ChallengesGrid from './ChallengesGrid';

export default function InvitationalSection() {
  return (
    <section className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <InvitationalCard />
          <ChallengesGrid />
        </div>
      </div>
    </section>
  );
}
