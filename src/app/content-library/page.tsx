import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { LibraryBrowser } from './LibraryBrowser';

const description =
  '200+ AR-enhanced books across stories, science, letters, world, art and music — age-appropriate for children 2-6.';

export const metadata = pageMetadata({
  title: 'Content Library',
  description,
  path: '/content-library',
});

const ContentLibraryPage = () => {
  return (
    <>
      <JsonLd
        path="/content-library"
        title="Content Library"
        description={description}
        breadcrumb={[{ name: 'Content Library', path: '/content-library' }]}
      />
      {/* Hero */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto text-center">
          <span className="bg-sunny-light text-accent-foreground mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold">
            200+ AR Experiences
          </span>
          <h1 className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Content <span className="text-primary">Library</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Explore our collection of AR-enabled books covering every topic young learners love
          </p>
        </div>
      </section>

      <LibraryBrowser />
    </>
  );
};

export default ContentLibraryPage;
