import { redirect } from 'next/navigation';

// Catch-all: redirect /en/anything → /anything
export default async function EnSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  redirect(`/${slug.join('/')}`);
}
