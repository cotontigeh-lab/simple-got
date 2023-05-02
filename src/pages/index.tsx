import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { LanguageSelector } from '@/components'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <div>
      <LanguageSelector />
      {t('title')}
    </div>
  )
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
