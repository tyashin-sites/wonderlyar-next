import { Brain, Eye, Heart, Lightbulb, Timer, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: '3X Better Retention',
    description: 'Children remember 90% of what they experience vs. 10% of what they read',
    color: 'coral',
  },
  {
    icon: Timer,
    title: 'Longer Attention Span',
    description: 'AR experiences keep children engaged 4x longer than traditional materials',
    color: 'teal',
  },
  {
    icon: Brain,
    title: 'Deeper Understanding',
    description: 'Experience concepts in real-world scale — see how big a dinosaur really was!',
    color: 'sunny',
  },
  {
    icon: Lightbulb,
    title: 'Sparks Curiosity',
    description: 'Interactive elements encourage children to ask questions and explore further',
    color: 'lavender',
  },
  {
    icon: Heart,
    title: 'Joyful Learning',
    description: "Transform 'study time' into 'play time' while achieving better outcomes",
    color: 'mint',
  },
  {
    icon: Zap,
    title: 'Future-Ready Skills',
    description: 'Early exposure to AR technology builds digital literacy naturally',
    color: 'coral',
  },
];

export const BenefitsSection = () => {
  return (
    <section className="gradient-warm relative overflow-hidden py-24">
      {/* Decorative Blobs */}
      <div className="bg-coral-light absolute right-0 top-1/4 h-64 w-64 rounded-full opacity-40 blur-3xl" />
      <div className="bg-teal-light absolute bottom-1/4 left-0 h-80 w-80 rounded-full opacity-30 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="bg-coral-light text-coral-dark mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold">
            Why AR for Early Learning?
          </span>
          <h2 className="font-display text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Learning by Experiencing,
            <span className="text-primary"> Not Memorizing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Research shows that experiential learning creates stronger neural connections and
            lasting memories
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card shadow-soft hover:shadow-medium border-border/50 group rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                  benefit.color === 'coral'
                    ? 'bg-coral-light'
                    : benefit.color === 'teal'
                      ? 'bg-teal-light'
                      : benefit.color === 'sunny'
                        ? 'bg-sunny-light'
                        : benefit.color === 'lavender'
                          ? 'bg-lavender-light'
                          : 'bg-mint-light'
                }`}
              >
                <benefit.icon
                  className={`h-7 w-7 ${
                    benefit.color === 'coral'
                      ? 'text-coral-dark'
                      : benefit.color === 'teal'
                        ? 'text-teal-dark'
                        : benefit.color === 'sunny'
                          ? 'text-accent-foreground'
                          : benefit.color === 'lavender'
                            ? 'text-lavender'
                            : 'text-mint'
                  }`}
                />
              </div>
              <h3 className="font-display text-foreground mb-2 text-lg font-bold">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
