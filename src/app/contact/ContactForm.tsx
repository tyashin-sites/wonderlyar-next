'use client';

import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type SubmitStatus = 'idle' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;

      if (res.ok && data?.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', role: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card shadow-soft rounded-3xl p-8 lg:p-10">
      <h2 className="font-display text-foreground mb-6 text-2xl font-bold">Book a Free Demo</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-foreground mb-2 block text-sm font-medium">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="text-foreground mb-2 block text-sm font-medium">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
              placeholder="john@school.com"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-foreground mb-2 block text-sm font-medium">Organization</label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
              placeholder="Sunshine Preschool"
            />
          </div>
          <div>
            <label className="text-foreground mb-2 block text-sm font-medium">Your Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="border-border bg-background text-foreground focus:ring-primary w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            >
              <option value="">Select your role</option>
              <option value="school-admin">School Administrator</option>
              <option value="teacher">Teacher</option>
              <option value="curriculum">Curriculum Designer</option>
              <option value="parent">Parent</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-foreground mb-2 block text-sm font-medium">Message</label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary w-full resize-none rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            placeholder="Tell us about your school and what you're looking for..."
          />
        </div>

        {status === 'success' && (
          <p role="status" className="text-teal-dark bg-teal-light rounded-xl p-4">
            Message sent! We&apos;ll get back to you within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="text-destructive bg-destructive/10 rounded-xl p-4">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
