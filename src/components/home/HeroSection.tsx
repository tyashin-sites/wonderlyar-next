import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play, Sparkles, Star } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="gradient-hero relative min-h-[90vh] overflow-hidden">
      {/* Decorative Blobs */}
      <div className="bg-coral-light animate-blob-morph absolute left-10 top-20 h-72 w-72 rounded-full opacity-60 blur-3xl" />
      <div
        className="bg-teal-light animate-blob-morph absolute bottom-20 right-10 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{ animationDelay: '-4s' }}
      />
      <div className="bg-sunny-light absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <div className="grid min-h-[90vh] items-center gap-12 py-16 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="bg-card/80 shadow-soft animate-fade-in inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm">
              <Star className="text-sunny fill-sunny h-4 w-4" />
              <span className="text-foreground text-sm font-medium">
                Trusted by 500+ Preschools
              </span>
            </div>

            <h1
              className="font-display text-foreground animate-fade-in text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              style={{ animationDelay: '0.1s' }}
            >
              Learning That Comes
              <span className="text-primary mt-2 block">Alive</span>
            </h1>

            <p
              className="text-muted-foreground animate-fade-in mx-auto max-w-xl text-lg leading-relaxed md:text-xl lg:mx-0"
              style={{ animationDelay: '0.2s' }}
            >
              Transform books into magical AR experiences where children can see, hear, and interact
              with concepts in their real world. No app required.
            </p>

            <div
              className="animate-fade-in flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              style={{ animationDelay: '0.3s' }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  <Sparkles className="h-5 w-5" />
                  Book a Free Demo
                </Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link href="/how-it-works">
                  <Play className="h-5 w-5" />
                  See AR in Action
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="animate-fade-in flex items-center justify-center gap-6 pt-4 lg:justify-start"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="from-coral to-coral-dark border-background h-10 w-10 rounded-full border-2 bg-gradient-to-br"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="text-foreground font-semibold">2,000+ Teachers</p>
                <p className="text-muted-foreground">Love WonderlyAR</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in-up relative" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <Image
                src="/hero-image.jpg"
                alt="Child experiencing AR learning with magical 3D characters emerging from a book"
                width={1024}
                height={683}
                priority
                className="shadow-medium h-auto w-full rounded-3xl"
              />
            </div>

            {/* Floating Elements */}
            <div className="bg-card shadow-soft animate-float absolute -right-4 -top-4 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="bg-sunny flex h-8 w-8 items-center justify-center rounded-full">
                  <span className="text-lg">🦋</span>
                </div>
                <span className="text-sm font-semibold">Interactive!</span>
              </div>
            </div>

            <div
              className="bg-card shadow-soft animate-float absolute -bottom-4 -left-4 rounded-2xl px-4 py-3"
              style={{ animationDelay: '-1.5s' }}
            >
              <div className="flex items-center gap-2">
                <div className="bg-teal flex h-8 w-8 items-center justify-center rounded-full">
                  <span className="text-lg">📚</span>
                </div>
                <span className="text-sm font-semibold">No App Needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
