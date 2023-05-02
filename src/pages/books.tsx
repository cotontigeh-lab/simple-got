import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { MainLayout } from '@/layouts'

export default function Books() {
  const { t } = useTranslation('books')

  return <MainLayout title={t('title')}>TODO</MainLayout>
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'books'])),
    },
  }
}
