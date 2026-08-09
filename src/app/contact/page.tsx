import { Calendar } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { ContactForm } from './ContactForm';
import { RegionalContact } from '@/components/RegionalContact';

const description = 'Book a free WonderlyAR demo or ask us anything — we respond within 24 hours.';

export const metadata = pageMetadata({
  title: 'Contact Us',
  description,
  path: '/contact',
});

const ContactPage = () => {
  return (
    <>
      <JsonLd
        path="/contact"
        title="Contact Us"
        description={description}
        breadcrumb={[{ name: 'Contact Us', path: '/contact' }]}
      />
      {/* Hero */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto text-center">
          <span className="bg-card shadow-soft mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold">
            <Calendar className="mr-2 inline h-4 w-4" />
            Book a Demo
          </span>
          <h1 className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Let&apos;s <span className="text-primary">Connect</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Ready to bring wonder into learning? Schedule a free demo or reach out with any
            questions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-background py-24">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <ContactForm />

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-foreground mb-4 text-2xl font-bold">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions about WonderlyAR? Want to see a demo? Our team is here to help you
                  bring wonder into learning.
                </p>
              </div>

              <RegionalContact variant="full" />

              <div className="from-coral-light to-teal-light rounded-3xl bg-gradient-to-br p-8">
                <h3 className="font-display text-foreground mb-2 font-bold">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours during business days. For anything urgent,
                  the fastest way to reach us is the chat button above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
