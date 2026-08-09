import Link from 'next/link';
import { Sparkles, Mail, Building2, Phone, TrendingUp } from 'lucide-react';
import { InvestorNewsletterForm } from '@/components/InvestorNewsletterForm';
import { RegionalContact } from '@/components/RegionalContact';
import { getLegalConfig } from '@/lib/legal';
import { siteConfig } from '@/config/site';

const footerLinks = {
  product: [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/content-library', label: 'Content Library' },
    { href: '/why-ar', label: 'Why AR' },
  ],
  solutions: [
    { href: '/for-preschools', label: 'For Preschools' },
    { href: '/for-educators', label: 'For Educators' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ],
};

export async function Footer({ hasBlog = false }: { hasBlog?: boolean }) {
  const legal = await getLegalConfig();

  const productLinks = hasBlog
    ? [...footerLinks.product, { href: '/blog', label: 'Blog' }]
    : footerLinks.product;

  return (
    <footer className="bg-foreground text-background/90">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-2xl">
                <Sparkles className="text-primary-foreground h-6 w-6" />
              </div>
              <span className="font-display text-background text-2xl font-bold">
                Wonderly<span className="text-primary">AR</span>
              </span>
            </Link>
            <p className="text-background/70 mb-4 max-w-sm leading-relaxed">
              Transforming early childhood education with magical AR experiences that spark
              curiosity and make learning unforgettable.
            </p>
            <div className="text-background/70 mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-primary h-5 w-5 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary h-5 w-5 flex-shrink-0" />
                <a href={siteConfig.contact.phoneHref} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                <span>{siteConfig.organization}</span>
              </div>
              <RegionalContact variant="compact" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display text-background mb-4 text-lg font-bold">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) =>
                link.href === '/blog' ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-display text-background mb-4 text-lg font-bold">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-background mb-4 text-lg font-bold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors Section */}
          <div className="lg:col-span-6 xl:col-span-1">
            <div className="lg:max-w-sm xl:max-w-none">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="text-primary h-5 w-5" />
                <h4 className="font-display text-background text-lg font-bold">For Investors</h4>
              </div>
              <p className="text-background/70 mb-4 text-sm">
                Join our journey in revolutionizing early education. Subscribe for monthly investor
                updates.
              </p>
              <InvestorNewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-background/10 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <div className="text-background/50 text-center text-sm md:text-left">
            <p>
              {legal.copyrightText ||
                `© ${new Date().getFullYear()} ${siteConfig.copyrightHolder}. All rights reserved.`}
            </p>
          </div>
          {legal.pages.length > 0 && (
            <div className="text-background/50 flex items-center gap-6 text-sm">
              {legal.pages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Tyashin attribution — mandatory on every plan, styled in the site's
            own footer tokens (addendum §3f). */}
        <div className="border-background/10 mt-8 border-t pt-6 text-center">
          <p className="text-background/50 text-xs">
            Powered by{' '}
            <a
              href="https://tyashin.com"
              target="_blank"
              rel="noopener"
              className="hover:text-primary hover:underline transition-colors"
            >
              Tyashin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
