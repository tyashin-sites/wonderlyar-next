import { CheckCircle, GraduationCap, School, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const forPreschools = [
  'Ready-to-use classroom content',
  'Teacher training & support',
  'Parent engagement tools',
  'Progress tracking dashboard',
];

const forEducators = [
  'Create your own AR content',
  'Distribute to your network',
  'Custom branding options',
  'Licensing & royalties',
];

export const AudienceSection = () => {
  return (
    <section className="bg-foreground relative overflow-hidden py-24">
      {/* Decorative Elements */}
      <div className="bg-coral/10 absolute right-0 top-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-teal/10 absolute bottom-0 left-0 h-80 w-80 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-background mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Built for Those Who
            <span className="text-primary"> Shape Young Minds</span>
          </h2>
          <p className="text-background/70 text-lg">
            Whether you run a preschool or create educational content, WonderlyAR empowers you
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* For Preschools */}
          <div className="bg-background shadow-medium rounded-3xl p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-coral-light flex h-14 w-14 items-center justify-center rounded-2xl">
                <School className="text-coral-dark h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-foreground text-2xl font-bold">For Preschools</h3>
                <p className="text-muted-foreground">Transform your classrooms</p>
              </div>
            </div>

            <ul className="mb-8 space-y-4">
              {forPreschools.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" className="w-full" asChild>
              <Link href="/for-preschools">
                <Users className="h-5 w-5" />
                Learn More for Schools
              </Link>
            </Button>
          </div>

          {/* For Educators */}
          <div className="bg-background shadow-medium rounded-3xl p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-teal-light flex h-14 w-14 items-center justify-center rounded-2xl">
                <GraduationCap className="text-teal-dark h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-foreground text-2xl font-bold">For Educators</h3>
                <p className="text-muted-foreground">Create & distribute AR content</p>
              </div>
            </div>

            <ul className="mb-8 space-y-4">
              {forEducators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="secondary" size="lg" className="w-full" asChild>
              <Link href="/for-educators">
                <GraduationCap className="h-5 w-5" />
                Start Creating
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
