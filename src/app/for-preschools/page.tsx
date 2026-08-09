import Link from 'next/link';
import { Users, Award, BarChart, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata = pageMetadata({
  title: 'AR Learning for Preschools',
  description:
    'Partner with WonderlyAR to transform your classrooms: ready-to-use AR content, teacher training, progress tracking, and parent engagement.',
  path: '/for-preschools',
});

const benefits = [
  {
    icon: BookOpen,
    title: 'Ready-to-Use Content',
    description: 'Access 200+ AR books aligned with early childhood curriculum standards',
  },
  {
    icon: Users,
    title: 'Teacher Training',
    description: 'Comprehensive onboarding and ongoing support for your teaching staff',
  },
  {
    icon: BarChart,
    title: 'Progress Tracking',
    description: 'Dashboard to monitor student engagement and learning outcomes',
  },
  {
    icon: Heart,
    title: 'Parent Engagement',
    description: 'Share AR experiences with parents to showcase learning at home',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Become a certified WonderlyAR partner school with marketing support',
  },
];

const stats = [
  { value: '500+', label: 'Partner Schools' },
  { value: '40%', label: 'Increased Engagement' },
  { value: '3x', label: 'Better Retention' },
  { value: '95%', label: 'Parent Satisfaction' },
];

const ForPreschools = () => {
  return (
    <>
      <JsonLd
        path="/for-preschools"
        title="AR Learning for Preschools"
        description="Partner with WonderlyAR to transform your classrooms: ready-to-use AR content, teacher training, progress tracking, and parent engagement."
        breadcrumb={[{ name: 'AR Learning for Preschools', path: '/for-preschools' }]}
      />
      {/* Hero */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="bg-coral-light text-coral-dark mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold">
              For Preschools
            </span>
            <h1 className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Transform Your <span className="text-primary">Classrooms</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl">
              Equip your preschool with cutting-edge AR technology that makes learning magical,
              measurable, and memorable for every child.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Book a School Demo</Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link href="/content-library">Explore Content</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-primary mb-2 text-4xl font-bold md:text-5xl">
                  {stat.value}
                </p>
                <p className="text-background/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Why Schools Choose WonderlyAR
            </h2>
            <p className="text-muted-foreground">
              Everything you need to bring AR learning to your classrooms
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card shadow-soft hover:shadow-medium rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-coral-light mb-6 flex h-14 w-14 items-center justify-center rounded-2xl">
                  <benefit.icon className="text-coral-dark h-7 w-7" />
                </div>
                <h3 className="font-display text-foreground mb-3 text-xl font-bold">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-warm py-24">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-foreground mb-6 text-3xl font-bold md:text-4xl">
            Ready to Become a Partner School?
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
            Join 500+ preschools already using WonderlyAR to create magical learning experiences.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ForPreschools;
