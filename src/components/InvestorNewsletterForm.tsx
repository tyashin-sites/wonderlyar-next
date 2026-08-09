'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Status = { kind: 'idle' } | { kind: 'success'; message: string } | { kind: 'error'; message: string };

export function InvestorNewsletterForm() {
  const [investorEmail, setInvestorEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const handleInvestorSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!investorEmail) return;

    setIsSubmitting(true);
    setStatus({ kind: 'idle' });

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: investorEmail, name: 'Investor' }),
      });
      const result = (await res.json()) as {
        ok?: boolean;
        requiresConfirmation?: boolean;
        error?: string;
      };

      if (res.ok && result.ok) {
        setStatus({
          kind: 'success',
          message: result.requiresConfirmation
            ? 'Welcome! Please check your email to confirm your subscription.'
            : "Welcome to our investor community! You'll receive monthly updates.",
        });
        setInvestorEmail('');
      } else {
        setStatus({
          kind: 'error',
          message: result.error || 'Subscription failed. Please try again later.',
        });
      }
    } catch {
      setStatus({ kind: 'error', message: 'Subscription failed. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleInvestorSubscribe} className="space-y-3">
      <input
        type="email"
        placeholder="investor@email.com"
        value={investorEmail}
        onChange={(e) => setInvestorEmail(e.target.value)}
        className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none md:text-sm"
        required
        aria-label="Investor email"
      />
      <Button type="submit" size="sm" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          'Get Updates'
        )}
      </Button>
      {status.kind === 'success' && (
        <p className="text-sm text-teal-light" role="status">
          {status.message}
        </p>
      )}
      {status.kind === 'error' && (
        <p className="text-destructive text-sm" role="alert">
          {status.message}
        </p>
      )}
    </form>
  );
}
