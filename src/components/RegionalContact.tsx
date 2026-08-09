'use client';

import { useEffect, useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DEFAULT_REGION,
  REGIONS,
  chatUrl,
  type RegionKey,
} from '@/config/regions';

/**
 * Geo-aware regional team block. Detects the visitor's nearest regional
 * team via /api/geo and renders its contact card ("full") or a single
 * chat link ("compact", for the footer). Renders the HQ team until (or
 * unless) detection resolves.
 */
export function RegionalContact({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const [regionKey, setRegionKey] = useState<RegionKey>(DEFAULT_REGION);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/geo')
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { region?: RegionKey } | null) => {
        if (!cancelled && data?.region && REGIONS[data.region]) {
          setRegionKey(data.region);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const region = REGIONS[regionKey];

  if (variant === 'compact') {
    return (
      <a
        href={chatUrl(region)}
        rel="noopener"
        className="hover:text-primary flex items-center gap-3 transition-colors"
      >
        <MessageCircle className="text-primary h-5 w-5 flex-shrink-0" />
        <span>Chat with our team</span>
      </a>
    );
  }

  return (
    <div className="gradient-card shadow-soft rounded-3xl p-8">
      <h3 className="font-display text-foreground mb-1 text-xl font-bold">{region.label}</h3>
      <p className="text-muted-foreground mb-6 text-sm">{region.coverage}</p>

      <Button variant="hero" className="mb-6 w-full" asChild>
        <a href={chatUrl(region)} rel="noopener">
          <MessageCircle className="h-5 w-5" />
          Chat with us
        </a>
      </Button>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="bg-coral-light flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl">
            <Mail className="text-coral-dark h-5 w-5" />
          </div>
          <div>
            <p className="text-foreground text-sm font-semibold">Email us</p>
            <a
              href={`mailto:${region.email}`}
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              {region.email}
            </a>
          </div>
        </div>

        {region.phone && region.phoneHref && (
          <div className="flex items-start gap-4">
            <div className="bg-teal-light flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl">
              <Phone className="text-teal-dark h-5 w-5" />
            </div>
            <div>
              <p className="text-foreground text-sm font-semibold">Call us</p>
              <a
                href={region.phoneHref}
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                {region.phone}
              </a>
            </div>
          </div>
        )}

        {region.addressLines && (
          <div className="flex items-start gap-4">
            <div className="bg-lavender-light flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl">
              <MapPin className="text-lavender h-5 w-5" />
            </div>
            <div>
              <p className="text-foreground text-sm font-semibold">Visit us</p>
              <p className="text-muted-foreground text-sm">
                {region.addressLines[0]}
                <br />
                {region.addressLines[1]}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
