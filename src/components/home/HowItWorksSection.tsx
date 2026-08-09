import { BookOpen, Smartphone, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    number: '01',
    title: 'Open Any AR Book',
    description:
      'Pick up any WonderlyAR-enabled storybook or concept book. Each page is designed for immersive learning.',
    color: 'coral',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Scan with Your Phone',
    description:
      "Simply point your phone's camera at the page. No app download required — it works in any mobile browser.",
    color: 'teal',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Watch Magic Happen',
    description:
      '3D characters, animals, and objects come alive in real-world scale. Children can hear, see, and interact!',
    color: 'sunny',
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="bg-background relative overflow-hidden py-24">
      {/* Decorative Elements */}
      <div className="from-coral-light/20 absolute left-0 top-0 h-24 w-full bg-gradient-to-b to-transparent" />

      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="bg-teal-light text-teal-dark mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold">
            Simple & Magical
          </span>
          <h2 className="font-display text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            How WonderlyAR Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to transform any learning moment into an unforgettable adventure
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="from-border absolute left-[60%] top-20 hidden h-0.5 w-full bg-gradient-to-r to-transparent md:block" />
              )}

              <div className="bg-card shadow-soft hover:shadow-medium gradient-card relative rounded-3xl p-8 transition-all duration-500 group-hover:-translate-y-2">
                {/* Number Badge */}
                <div
                  className={`font-display shadow-soft absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold ${
                    step.color === 'coral'
                      ? 'bg-coral text-primary-foreground'
                      : step.color === 'teal'
                        ? 'bg-teal text-secondary-foreground'
                        : 'bg-sunny text-accent-foreground'
                  }`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                    step.color === 'coral'
                      ? 'bg-coral-light'
                      : step.color === 'teal'
                        ? 'bg-teal-light'
                        : 'bg-sunny-light'
                  }`}
                >
                  <step.icon
                    className={`h-8 w-8 ${
                      step.color === 'coral'
                        ? 'text-coral-dark'
                        : step.color === 'teal'
                          ? 'text-teal-dark'
                          : 'text-accent-foreground'
                    }`}
                  />
                </div>

                <h3 className="font-display text-foreground mb-3 text-xl font-bold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
