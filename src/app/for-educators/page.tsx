import Link from 'next/link';
import { Palette, Share2, DollarSign, BookMarked, Wand2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata = pageMetadata({
  title: 'For Educators & Creators',
  description:
    'Create and share AR content with WonderlyAR: easy AR creation tools, custom branding, wide distribution, and royalties for creators.',
  path: '/for-educators',
});

const features = [
  {
    icon: Wand2,
    title: 'Easy AR Creation',
    description:
      'No coding required. Use our intuitive tools to turn any illustration into an AR experience.',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: "Add your logo, colors, and identity to create AR content that's uniquely yours.",
  },
  {
    icon: Share2,
    title: 'Wide Distribution',
    description: 'Reach thousands of preschools and parents through our established network.',
  },
  {
    icon: DollarSign,
    title: 'Earn Royalties',
    description:
      'Get paid for every scan. Our licensing model ensures you earn from your creativity.',
  },
  {
    icon: BookMarked,
    title: 'Content Library',
    description:
      'Access our asset library of 3D models, animations, and audio to enhance your books.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Your content can reach children worldwide with multi-language support.',
  },
];

const ForEducators = () => {
  return (
    <>
      <JsonLd
        path="/for-educators"
        title="For Educators & Creators"
        description="Create and share AR content with WonderlyAR: easy AR creation tools, custom branding, wide distribution, and royalties for creators."
        breadcrumb={[{ name: 'For Educators & Creators', path: '/for-educators' }]}
      />
      {/* Hero */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="bg-teal-light text-teal-dark mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold">
              For Educators & Creators
            </span>
            <h1 className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Create & Share <span className="text-secondary">AR Content</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl">
              Turn your educational content into immersive AR experiences. No technical skills
              needed — just your creativity and passion for teaching.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Start Creating</Link>
              </Button>
              <Button variant="outlineSecondary" size="lg" asChild>
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Everything You Need to Create
            </h2>
            <p className="text-muted-foreground">
              Professional tools and support to bring your educational vision to life
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card shadow-soft hover:shadow-medium rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-teal-light mb-6 flex h-14 w-14 items-center justify-center rounded-2xl">
                  <feature.icon className="text-teal-dark h-7 w-7" />
                </div>
                <h3 className="font-display text-foreground mb-3 text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-background mb-6 text-3xl font-bold md:text-4xl">
            Ready to Share Your Knowledge?
          </h2>
          <p className="text-background/70 mx-auto mb-8 max-w-xl text-lg">
            Join our creator community and help shape the future of early childhood education.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link href="/contact">Apply to Become a Creator</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ForEducators;
