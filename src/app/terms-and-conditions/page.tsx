import { LegalPageRenderer } from '@/components/LegalPageRenderer';
import { pageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export const metadata = pageMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using WonderlyAR.',
  path: '/terms-and-conditions',
});

export default function TermsPage() {
  return <LegalPageRenderer slug="terms-and-conditions" />;
}
