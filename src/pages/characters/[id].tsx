import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { MainLayout } from '@/layouts'
import { GetServerSideProps } from 'next/types'
import { ApiRoutes } from '@/configs'
import { Character } from '@/types'

type CharacterPageProps = {
  character: Character
}

export default function Character({ character }: CharacterPageProps) {
  const { t } = useTranslation('characters')

  return (
    <MainLayout
      title={
        character.name.length
          ? `${character.name} ${
              character.aliases[0] ? `(${character.aliases[0]})` : null
            }`
          : character.aliases[0]
      }
    >
      <div className="flex flex-col gap-2">
        <h2>{t('seasons')}</h2>
        {character.tvSeries.length && character.tvSeries[0].length ? (
          <ul className="list-disc pl-4">
            {character.tvSeries.map((serie, key) => (
              <li key={key}>{serie}</li>
            ))}
          </ul>
        ) : (
          t('no-season')
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h2>{t('actors')}</h2>
        {character.playedBy.length && character.playedBy[0].length ? (
          <ul className="list-disc pl-4">
            {character.playedBy.map((actor, key) => (
              <li key={key}>{actor}</li>
            ))}
          </ul>
        ) : (
          t('no-actors')
        )}
      </div>

      <h2>{t('gender')}</h2>
      <p className="list-disc">{character.gender}</p>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res, locale, query }) => {
  // Caching
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  // Fetch books
  const apiFetch = await fetch(ApiRoutes.Character(query['id'] as string))
  const character = await apiFetch.json()

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'characters'])),
      character,
    },
  }
}
