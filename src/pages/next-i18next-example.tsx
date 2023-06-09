import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TranslationExample = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('hi')}</p>
      <p>aaa</p>
    </div>
  );
};

export default TranslationExample;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && (await serverSideTranslations(locale, ['common']))),
      // Will be passed to the page component as props
    },
  };
};
