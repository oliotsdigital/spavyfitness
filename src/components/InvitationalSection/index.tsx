import InvitationalCard from './InvitationalCard';
import ChallengesGrid from './ChallengesGrid';

export default function InvitationalSection() {
  return (
    <section className="bg-black border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <InvitationalCard />
          <ChallengesGrid />
        </div>
      </div>
    </section>
  );
}
