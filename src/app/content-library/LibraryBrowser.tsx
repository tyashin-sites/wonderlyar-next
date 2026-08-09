'use client';

import Link from 'next/link';
import { BookHeart, Dna, Globe, Music, Palette, Puzzle, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', label: 'All', icon: Search },
  { id: 'stories', label: 'Stories', icon: BookHeart },
  { id: 'science', label: 'Science', icon: Dna },
  { id: 'letters', label: 'Letters & Numbers', icon: Puzzle },
  { id: 'world', label: 'World & Culture', icon: Globe },
  { id: 'art', label: 'Art & Creativity', icon: Palette },
  { id: 'music', label: 'Music & Rhymes', icon: Music },
];

const books = [
  { id: 1, title: 'The Friendly Dinosaur', category: 'stories', age: '3-5', color: 'coral' },
  { id: 2, title: 'Amazing Animals Safari', category: 'science', age: '2-4', color: 'teal' },
  { id: 3, title: 'ABCs Come Alive', category: 'letters', age: '2-3', color: 'sunny' },
  { id: 4, title: 'Counting Adventures', category: 'letters', age: '3-5', color: 'lavender' },
  { id: 5, title: 'Around the World', category: 'world', age: '4-6', color: 'mint' },
  { id: 6, title: 'Colors & Shapes Magic', category: 'art', age: '2-4', color: 'coral' },
  { id: 7, title: 'Ocean Explorers', category: 'science', age: '3-5', color: 'teal' },
  { id: 8, title: 'Nursery Rhymes AR', category: 'music', age: '2-4', color: 'sunny' },
  { id: 9, title: 'Space Adventure', category: 'science', age: '4-6', color: 'lavender' },
  { id: 10, title: 'The Little Artist', category: 'art', age: '3-5', color: 'mint' },
  { id: 11, title: 'Cultural Celebrations', category: 'world', age: '4-6', color: 'coral' },
  { id: 12, title: 'Body & Health', category: 'science', age: '4-6', color: 'teal' },
];

export function LibraryBrowser() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredBooks =
    activeCategory === 'all' ? books : books.filter((book) => book.category === activeCategory);

  return (
    <>
      {/* Filters */}
      <section className="bg-background border-border sticky top-20 z-40 border-b py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-muted text-muted-foreground hover:bg-coral-light hover:text-coral-dark'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-card shadow-soft hover:shadow-medium group overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`flex aspect-[4/3] items-center justify-center ${
                    book.color === 'coral'
                      ? 'bg-coral-light'
                      : book.color === 'teal'
                        ? 'bg-teal-light'
                        : book.color === 'sunny'
                          ? 'bg-sunny-light'
                          : book.color === 'lavender'
                            ? 'bg-lavender-light'
                            : 'bg-mint-light'
                  }`}
                >
                  <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
                    📚
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-foreground mb-2 text-lg font-bold">
                    {book.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Ages {book.age}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        book.color === 'coral'
                          ? 'bg-coral-light text-coral-dark'
                          : book.color === 'teal'
                            ? 'bg-teal-light text-teal-dark'
                            : book.color === 'sunny'
                              ? 'bg-sunny-light text-accent-foreground'
                              : book.color === 'lavender'
                                ? 'bg-lavender-light text-lavender'
                                : 'bg-mint-light text-mint'
                      }`}
                    >
                      AR Ready
                    </span>
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
            Want Access to the Full Library?
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
            Contact us for institutional licensing or become a partner school.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link href="/contact">Get Full Access</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
