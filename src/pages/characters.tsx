import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { MainLayout } from '@/layouts'

export default function Characters() {
  const { t } = useTranslation('characters')

  return <MainLayout title={t('title')}>TODO</MainLayout>
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'characters'])),
    },
  }
}
