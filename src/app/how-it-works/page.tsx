import Link from 'next/link';
import { BookOpen, Smartphone, Sparkles, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata = pageMetadata({
  title: 'How WonderlyAR Works',
  description:
    'Three simple steps to transform any book into a magical AR experience — choose a book, scan the page, and watch learning come alive.',
  path: '/how-it-works',
});

const steps = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Choose Your Book',
    description:
      'Select from our library of AR-enabled storybooks, concept books, or activity books. Each book is carefully designed with curriculum-aligned content that brings concepts to life.',
    details: [
      '200+ titles across all subjects',
      'Age-appropriate for 2-6 years',
      'Available in multiple languages',
    ],
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Scan the Page',
    description:
      'Open any mobile browser and visit our web app. Point your camera at any AR-enabled page. No app download needed — it works instantly on any smartphone or tablet.',
    details: [
      'Works on iOS and Android',
      'No app installation required',
      'Instant loading under 3 seconds',
    ],
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Experience the Magic',
    description:
      'Watch as 3D characters, animals, objects, and entire worlds come alive right in your room. Children can interact, learn, and explore in ways never before possible.',
    details: [
      'Real-world scale 3D models',
      'Audio-guided storytelling',
      'Interactive touch points',
    ],
  },
];

const HowItWorks = () => {
  return (
    <>
      <JsonLd
        path="/how-it-works"
        title="How WonderlyAR Works"
        description="Three simple steps to transform any book into a magical AR experience — choose a book, scan the page, and watch learning come alive."
        breadcrumb={[{ name: 'How WonderlyAR Works', path: '/how-it-works' }]}
      />
      {/* Hero */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto text-center">
          <span className="bg-card shadow-soft mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold">
            Simple & Magical
          </span>
          <h1 className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            How WonderlyAR <span className="text-primary">Works</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Three simple steps to transform any book into a magical AR experience
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-24">
        <div className="container mx-auto">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-display text-coral-light text-6xl font-bold">
                      {step.number}
                    </span>
                    <div className="bg-coral-light flex h-16 w-16 items-center justify-center rounded-2xl">
                      <step.icon className="text-coral-dark h-8 w-8" />
                    </div>
                  </div>
                  <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <CheckCircle className="text-primary h-5 w-5" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="from-coral-light to-teal-light flex aspect-video items-center justify-center rounded-3xl bg-gradient-to-br">
                    <div className="bg-card shadow-medium flex h-24 w-24 items-center justify-center rounded-full">
                      <Play className="text-primary ml-1 h-12 w-12" />
                    </div>
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
            Ready to See It in Action?
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
            Book a free demo and let us show you how WonderlyAR can transform learning at your
            school.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/contact">
              <Sparkles className="h-5 w-5" />
              Book a Free Demo
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
