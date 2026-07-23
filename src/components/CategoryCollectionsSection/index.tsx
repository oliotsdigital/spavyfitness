import { CATEGORY_COLLECTIONS } from '../../data/constants';
import CategoryCollectionCard from './CategoryCollectionCard';

export default function CategoryCollectionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-black uppercase text-white tracking-wide mb-6">
        SPAVY CATEGORY COLLECTIONS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CATEGORY_COLLECTIONS.map((collection) => (
          <CategoryCollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
}
