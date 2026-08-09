import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "My students can't wait for 'AR time' — they're learning without even realizing it. The dinosaur book alone has taught them more than weeks of traditional lessons.",
    author: 'Sarah Mitchell',
    role: 'Lead Teacher, Sunshine Preschool',
    rating: 5,
  },
  {
    quote:
      'As a parent, I was skeptical about screen time. But watching my 4-year-old daughter explore the solar system in our living room changed my mind completely.',
    author: 'David Chen',
    role: 'Parent of a WonderlyAR learner',
    rating: 5,
  },
  {
    quote:
      "We've seen a 40% increase in parent engagement since implementing WonderlyAR. Parents love seeing what their children learn through the AR experiences.",
    author: 'Priya Sharma',
    role: 'Director, Little Stars Academy',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="bg-card shadow-soft mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold">
            💬 What People Say
          </span>
          <h2 className="font-display text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Loved by Teachers,
            <span className="text-primary"> Trusted by Parents</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card shadow-soft hover:shadow-medium rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-sunny fill-sunny h-5 w-5" />
                ))}
              </div>

              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="from-coral to-coral-dark h-12 w-12 rounded-full bg-gradient-to-br" />
                <div>
                  <p className="text-foreground font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
