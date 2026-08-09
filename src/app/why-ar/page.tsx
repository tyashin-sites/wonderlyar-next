import Link from 'next/link';
import { Brain, Eye, Lightbulb, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata = pageMetadata({
  title: 'Why AR for Early Learning?',
  description:
    'The science behind AR learning: better retention, longer engagement, and deeper understanding for children aged 2-6.',
  path: '/why-ar',
});

const benefits = [
  {
    icon: Eye,
    title: 'Visual Learning',
    stat: '90%',
    description:
      'of information transmitted to the brain is visual. AR makes abstract concepts visible and tangible.',
  },
  {
    icon: Brain,
    title: 'Better Retention',
    stat: '3x',
    description:
      'Children remember 3 times more when they experience concepts vs. just reading about them.',
  },
  {
    icon: Timer,
    title: 'Longer Engagement',
    stat: '4x',
    description:
      'AR experiences keep children engaged 4 times longer than traditional learning materials.',
  },
  {
    icon: Lightbulb,
    title: 'Deeper Understanding',
    stat: '65%',
    description:
      'increase in conceptual understanding when children can interact with 3D representations.',
  },
];

const research = [
  {
    title: 'Attention & Focus',
    description:
      "AR technology naturally captures and maintains children's attention through interactive, immersive experiences that adapt to their curiosity.",
  },
  {
    title: 'Spatial Reasoning',
    description:
      'Seeing 3D objects in real-world scale helps develop crucial spatial reasoning skills that form the foundation for STEM learning.',
  },
  {
    title: 'Emotional Connection',
    description:
      'Interactive characters and stories create emotional connections that make learning memorable and enjoyable.',
  },
  {
    title: 'Multi-Sensory Learning',
    description:
      'Combining visual, auditory, and kinesthetic elements engages multiple senses for comprehensive learning.',
  },
];

const WhyAR = () => {
  return (
    <>
      <JsonLd
        path="/why-ar"
        title="Why AR for Early Learning?"
        description="The science behind AR learning: better retention, longer engagement, and deeper understanding for children aged 2-6."
        breadcrumb={[{ name: 'Why AR for Early Learning?', path: '/why-ar' }]}
      />
      {/* Hero */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto text-center">
          <span className="bg-coral-light text-coral-dark mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold">
            The Science of Learning
          </span>
          <h1 className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Why <span className="text-primary">AR</span> for Early Learning?
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Research-backed reasons why augmented reality is transforming early childhood education
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card shadow-soft hover:shadow-medium rounded-3xl p-8 text-center transition-all duration-300"
              >
                <div className="bg-coral-light mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                  <benefit.icon className="text-coral-dark h-8 w-8" />
                </div>
                <p className="font-display text-primary mb-2 text-4xl font-bold md:text-5xl">
                  {benefit.stat}
                </p>
                <h3 className="font-display text-foreground mb-2 text-lg font-bold">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="bg-foreground py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-background mb-4 text-3xl font-bold md:text-4xl">
              How AR Enhances Development
            </h2>
            <p className="text-background/70">
              Understanding the cognitive benefits of AR in early education
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {research.map((item, index) => (
              <div key={item.title} className="bg-background shadow-soft rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-coral-light flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl">
                    <span className="font-display text-coral-dark font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-foreground mb-2 text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-warm py-24">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-foreground mb-6 text-3xl font-bold md:text-4xl">
            Experience the Difference
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
            See how WonderlyAR brings these benefits to life in your classroom or home.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/contact">Book a Free Demo</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default WhyAR;
