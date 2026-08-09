import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="bg-background relative overflow-hidden py-24">
      <div className="container mx-auto">
        <div className="from-coral via-primary to-coral-dark relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br p-12 lg:p-16">
          {/* Decorative Elements */}
          <div className="bg-sunny/20 absolute right-0 top-0 h-64 w-64 rounded-full blur-3xl" />
          <div className="bg-teal/20 absolute bottom-0 left-0 h-80 w-80 rounded-full blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="bg-primary-foreground/20 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles className="text-primary-foreground h-4 w-4" />
              <span className="text-primary-foreground text-sm font-medium">
                Start Your Journey Today
              </span>
            </div>

            <h2 className="font-display text-primary-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Bring Wonder into Learning
            </h2>

            <p className="text-primary-foreground/90 mx-auto mb-10 max-w-xl text-lg">
              Join 500+ preschools and thousands of educators who are transforming how children
              experience learning.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium"
                asChild
              >
                <Link href="/contact">
                  Book a Free Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 border-2 bg-transparent"
                asChild
              >
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
