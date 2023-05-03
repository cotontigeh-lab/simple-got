import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { MainLayout } from '@/layouts'
import { GetServerSideProps } from 'next/types'
import { ApiRoutes, AppRoutes } from '@/configs'
import { Book } from '@/types'
import { Item } from '@/components'
import { getLastUrlPart } from '@/library'

type BooksPageProps = {
  books: Book[]
}

export default function Books({ books = [] }: BooksPageProps) {
  const { t } = useTranslation('books')

  return (
    <MainLayout title={t('title')}>
      <div className="flex flex-col gap-2">
        {books.map((book) => (
          <Item key={book.url} href={AppRoutes.Book(getLastUrlPart(book.url))}>
            {book.name}
          </Item>
        ))}
      </div>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res, locale }) => {
  // Caching
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  // Fetch books
  const apiFetch = await fetch(ApiRoutes.Books(15))
  const books = await apiFetch.json()

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'books'])),
      books,
    },
  }
}
