import { classNames } from '@/library'
import { Locales } from '@/types'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'

interface LanguageSelectorProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className,
  ...rest
}) => {
  const router = useRouter()
  const locale = useMemo(() => router.locale, [router]) as Locales

  const handleLocaleClick = useCallback(
    (locale: Locales) => {
      router.push(router.asPath, router.asPath, { locale })
    },
    [router],
  )

  return (
    <div
      className={classNames(
        'fixed md:absolute right-4 bottom-4 md:top-10 md:bottom-0',
        className,
      )}
      {...rest}
    >
      <div className="btn-group">
        <button
          className={classNames('btn', locale === Locales.en ? 'btn-active' : undefined)}
          onClick={() => handleLocaleClick(Locales.en)}
        >
          🇬🇧
        </button>
        <button
          className={classNames('btn', locale === Locales.fr ? 'btn-active' : undefined)}
          onClick={() => handleLocaleClick(Locales.fr)}
        >
          🇫🇷
        </button>
      </div>
    </div>
  )
}
