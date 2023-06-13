import Link from 'next/link';
import { useRouter } from 'next/router';

interface LangLinkProps {
  children: React.ReactNode;
  skipLocaleHandling?: boolean;
  href?: string;
  locale?: string;
}

const LangLink = ({ children, skipLocaleHandling, ...rest }: LangLinkProps) => {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || '';

  let href = rest.href || router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale?.toString());
  }

  return (
    <>
      <Link href={href} legacyBehavior>
        <a {...rest}>{children}</a>
      </Link>
    </>
  );
};

export default LangLink;
