import Link from 'next/link';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata = pageMetadata({
  title: 'About WonderlyAR',
  description:
    "Building future-ready learners: our story, mission, values, and the team behind WonderlyAR's magical AR learning experiences.",
  path: '/about',
});

const values = [
  {
    icon: Heart,
    title: 'Learning with Joy',
    description:
      "We believe children learn best when they're having fun. Every AR experience is designed to spark joy and wonder.",
  },
  {
    icon: Target,
    title: 'Experience Over Memorization',
    description:
      'We help children experience concepts rather than just memorize them, creating deeper, lasting understanding.',
  },
  {
    icon: Users,
    title: 'Supporting Educators',
    description:
      "We're here to empower teachers, not replace them. Our tools enhance what educators do best — inspire.",
  },
  {
    icon: Lightbulb,
    title: 'Future-Ready Learning',
    description:
      'We prepare children for a technology-rich future while keeping the magic of childhood intact.',
  },
];

const team = [
  { name: 'Sarah Chen', role: 'CEO & Co-Founder', bg: 'coral' },
  { name: 'Michael Roberts', role: 'CTO & Co-Founder', bg: 'teal' },
  { name: 'Priya Sharma', role: 'Head of Education', bg: 'sunny' },
  { name: 'David Kim', role: 'Lead AR Designer', bg: 'lavender' },
];

const About = () => {
  return (
    <>
      <JsonLd
        path="/about"
        title="About WonderlyAR"
        description="Building future-ready learners: our story, mission, values, and the team behind WonderlyAR's magical AR learning experiences."
        breadcrumb={[{ name: 'About WonderlyAR', path: '/about' }]}
      />
      {/* Hero */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <span className="bg-card shadow-soft mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold">
              Our Story
            </span>
            <h1 className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Building <span className="text-primary">Future-Ready</span> Learners
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              WonderlyAR was born from a simple belief: every child deserves to experience the
              wonder of learning, not just read about it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-background py-24">
        <div className="container mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-foreground mb-6 text-3xl font-bold md:text-4xl">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                We're on a mission to transform early childhood education by making learning
                experiential, joyful, and memorable for every child — regardless of where they live
                or what resources their school has.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Through the magic of augmented reality, we're bringing concepts to life in ways that
                spark curiosity, build confidence, and create lifelong learners.
              </p>
            </div>
            <div className="from-coral-light to-teal-light flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br">
              <span className="text-9xl">✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="gradient-warm py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Our Values
            </h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card shadow-soft hover:shadow-medium rounded-3xl p-8 transition-all duration-300"
              >
                <div className="bg-coral-light mb-6 flex h-14 w-14 items-center justify-center rounded-2xl">
                  <value.icon className="text-coral-dark h-7 w-7" />
                </div>
                <h3 className="font-display text-foreground mb-3 text-xl font-bold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Meet the Team
            </h2>
            <p className="text-muted-foreground">
              Educators, technologists, and dreamers united by a passion for learning
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className={`mx-auto mb-4 h-32 w-32 rounded-full ${
                    member.bg === 'coral'
                      ? 'bg-coral-light'
                      : member.bg === 'teal'
                        ? 'bg-teal-light'
                        : member.bg === 'sunny'
                          ? 'bg-sunny-light'
                          : 'bg-lavender-light'
                  }`}
                />
                <h3 className="font-display text-foreground text-lg font-bold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-background mb-6 text-3xl font-bold md:text-4xl">
            Join Us on This Journey
          </h2>
          <p className="text-background/70 mx-auto mb-8 max-w-xl text-lg">
            Whether you're a school, educator, or parent, let's bring wonder into learning together.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
