import { Check } from 'lucide-react';
import { useNewsletterState } from '../../hooks/useNewsletterState';

export default function NewsletterSignup() {
  const {
    emailSubscribed,
    newsletterEmail,
    isSubmitting,
    setNewsletterEmail,
    handleSubscribe,
  } = useNewsletterState();

  return (
    <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h5 className="text-white font-extrabold uppercase text-sm">NEWSLETTER SIGNUP</h5>
        <p className="text-xs text-zinc-400">
          Sign up for product releases, gear updates, and Invitational announcements.
        </p>
      </div>

      {emailSubscribed ? (
        <div className="bg-green-900/40 border border-green-600 text-green-300 text-xs px-4 py-2.5 rounded flex items-center gap-2">
          <Check className="w-4 h-4" /> Thank you for subscribing to Spavy Fitness updates!
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 text-xs text-white px-4 py-2.5 rounded focus:outline-none focus:border-red-600 w-full md:w-72"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold text-xs uppercase px-6 py-2.5 rounded transition"
          >
            {isSubmitting ? '...' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  );
}
