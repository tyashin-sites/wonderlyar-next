import { BookHeart, Dna, Globe, Music, Palette, Puzzle } from 'lucide-react';

const categories = [
  {
    icon: BookHeart,
    title: 'Stories & Tales',
    description: 'Classic stories come alive with animated characters',
    count: '50+ titles',
    color: 'coral',
  },
  {
    icon: Dna,
    title: 'Science & Nature',
    description: 'Explore animals, plants, weather & the human body',
    count: '40+ titles',
    color: 'teal',
  },
  {
    icon: Puzzle,
    title: 'Letters & Numbers',
    description: 'Make ABCs and 123s interactive and fun',
    count: '30+ titles',
    color: 'sunny',
  },
  {
    icon: Globe,
    title: 'World & Culture',
    description: 'Travel the world and learn about different cultures',
    count: '25+ titles',
    color: 'lavender',
  },
  {
    icon: Palette,
    title: 'Art & Creativity',
    description: 'Spark imagination with colors, shapes & patterns',
    count: '20+ titles',
    color: 'mint',
  },
  {
    icon: Music,
    title: 'Music & Rhymes',
    description: 'Sing along with animated nursery rhymes',
    count: '35+ titles',
    color: 'coral',
  },
];

export const ContentLibrarySection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="bg-sunny-light text-accent-foreground mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold">
            200+ AR Experiences
          </span>
          <h2 className="font-display text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            A World of Wonder
            <span className="text-secondary"> to Explore</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Curriculum-aligned content covering every concept early learners need to discover
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card shadow-soft hover:shadow-medium group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  category.color === 'coral'
                    ? 'from-coral-light/50 bg-gradient-to-br to-transparent'
                    : category.color === 'teal'
                      ? 'from-teal-light/50 bg-gradient-to-br to-transparent'
                      : category.color === 'sunny'
                        ? 'from-sunny-light/50 bg-gradient-to-br to-transparent'
                        : category.color === 'lavender'
                          ? 'from-lavender-light/50 bg-gradient-to-br to-transparent'
                          : 'from-mint-light/50 bg-gradient-to-br to-transparent'
                }`}
              />

              <div className="relative z-10">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${
                    category.color === 'coral'
                      ? 'bg-coral-light'
                      : category.color === 'teal'
                        ? 'bg-teal-light'
                        : category.color === 'sunny'
                          ? 'bg-sunny-light'
                          : category.color === 'lavender'
                            ? 'bg-lavender-light'
                            : 'bg-mint-light'
                  }`}
                >
                  <category.icon
                    className={`h-8 w-8 ${
                      category.color === 'coral'
                        ? 'text-coral-dark'
                        : category.color === 'teal'
                          ? 'text-teal-dark'
                          : category.color === 'sunny'
                            ? 'text-accent-foreground'
                            : category.color === 'lavender'
                              ? 'text-lavender'
                              : 'text-mint'
                    }`}
                  />
                </div>

                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-display text-foreground text-xl font-bold">
                    {category.title}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      category.color === 'coral'
                        ? 'bg-coral-light text-coral-dark'
                        : category.color === 'teal'
                          ? 'bg-teal-light text-teal-dark'
                          : category.color === 'sunny'
                            ? 'bg-sunny-light text-accent-foreground'
                            : category.color === 'lavender'
                              ? 'bg-lavender-light text-lavender'
                              : 'bg-mint-light text-mint'
                    }`}
                  >
                    {category.count}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
