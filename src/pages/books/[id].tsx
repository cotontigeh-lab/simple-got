import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { MainLayout } from '@/layouts'
import { GetServerSideProps } from 'next/types'
import { ApiRoutes, AppRoutes } from '@/configs'
import { Book } from '@/types'
import { Item } from '@/components'
import { getLastUrlPart } from '@/library'

type BookPageProps = {
  book: Book
}

export default function Book({ book }: BookPageProps) {
  const { t } = useTranslation('books')

  return (
    <MainLayout title={book.name}>
      <div className="flex flex-col gap-2">
        <h2>{t('authors')}</h2>
        <ul className="list-disc pl-4">
          {book.authors.map((author, key) => (
            <li key={key}>{author}</li>
          ))}
        </ul>
      </div>
      <h2>{t('seriesNumber')}</h2>
      <p className="list-disc">{book.isbn}</p>
      <h2>{t('pages')}</h2>
      <p className="list-disc">{book.numberOfPages}</p>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res, locale, query }) => {
  // Caching
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  // Fetch books
  const apiFetch = await fetch(ApiRoutes.Book(query['id'] as string))
  const book = await apiFetch.json()

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'books'])),
      book,
    },
  }
}
