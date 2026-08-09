'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const baseNavLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/for-preschools', label: 'For Preschools' },
  { href: '/for-educators', label: 'For Educators' },
  { href: '/content-library', label: 'Content Library' },
  { href: '/why-ar', label: 'Why AR' },
  { href: '/about', label: 'About Us' },
];

export function Header({ hasBlog = false }: { hasBlog?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = hasBlog
    ? [
        ...baseNavLinks.slice(0, 5),
        { href: '/blog', label: 'Blog' },
        ...baseNavLinks.slice(5),
      ]
    : baseNavLinks;

  return (
    <header className="bg-background/80 border-border/50 fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="bg-primary shadow-soft group-hover:shadow-medium flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-300 group-hover:-translate-y-0.5">
              <Sparkles className="text-primary-foreground h-6 w-6" />
            </div>
            <span className="font-display text-foreground text-2xl font-bold">
              Wonderly<span className="text-primary">AR</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.href === '/blog' ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                    pathname === link.href || pathname.startsWith('/blog/')
                      ? 'bg-coral-light text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                    pathname === link.href
                      ? 'bg-coral-light text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="hero" size="default" asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hover:bg-muted rounded-xl p-2 transition-colors lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-border/50 animate-fade-in border-t py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-base font-medium transition-all duration-300',
                    pathname === link.href
                      ? 'bg-coral-light text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" className="mt-2 w-full">
                  Book a Demo
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
