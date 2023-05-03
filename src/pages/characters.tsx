import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { MainLayout } from '@/layouts'
import { GetServerSideProps } from 'next/types'
import { ApiRoutes, AppRoutes } from '@/configs'
import { Character } from '@/types'
import { Item } from '@/components'
import { getLastUrlPart } from '@/library'

type CharactersPageProps = {
  characters: Character[]
}

export default function Characters({ characters = [] }: CharactersPageProps) {
  const { t } = useTranslation('characters')

  return (
    <MainLayout title={t('title')}>
      <div className="flex flex-col gap-2">
        {characters.map((character) => (
          <Item
            key={character.url}
            href={AppRoutes.Character(getLastUrlPart(character.url))}
          >
            {character.name.length
              ? `${character.name} ${
                  character.aliases[0] ? `(${character.aliases[0]})` : ''
                }`
              : character.aliases[0]}
          </Item>
        ))}
      </div>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res, locale }) => {
  // Caching
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  // Fetch characters
  const apiFetch = await fetch(ApiRoutes.Characters(100))
  const characters = await apiFetch.json()

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'characters'])),
      characters,
    },
  }
}
