import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { MainLayout } from '@/layouts'
import { ApiRoutes, AppRoutes } from '@/configs'
import { GetServerSideProps } from 'next/types'
import { Book, Character } from '@/types'
import Link from 'next/link'
import { Item } from '@/components'
import { getLastUrlPart } from '@/library'

type HomePageProps = {
  characters: Character[]
  books: Book[]
}

export default function Home({ characters, books }: HomePageProps) {
  const { t } = useTranslation('home')
  const { t: tc } = useTranslation('common')

  return (
    <MainLayout title={t('title')}>
      <h1>Books</h1>

      <div className="flex flex-col gap-2">
        {books.map((book) => (
          <Item key={book.url} href={AppRoutes.Book(getLastUrlPart(book.url))}>
            {book.name}
          </Item>
        ))}
      </div>

      <Link href={AppRoutes.Books} className="link link-primary">
        {tc('see-more')}
      </Link>

      <div className="divider"></div>

      <div className="flex flex-col gap-2">
        {characters.map((character) => (
          <Item
            key={character.url}
            href={AppRoutes.Character(getLastUrlPart(character.url))}
          >
            {character.name.length
              ? `${character.name} (${character.aliases[0]})`
              : character.aliases[0]}
          </Item>
        ))}
      </div>

      <Link href={AppRoutes.Characters} className="link link-primary">
        {tc('see-more')}
      </Link>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res, locale }) => {
  // Caching
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  // Fetch characters
  const apiCharactersFetch = await fetch(ApiRoutes.Characters())
  const characters = await apiCharactersFetch.json()

  // Fetch books
  const apiBooksFetch = await fetch(ApiRoutes.Books())
  const books = await apiBooksFetch.json()

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
      characters,
      books,
    },
  }
}
