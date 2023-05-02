import { AppRoutes } from '@/configs'
import { classNames } from '@/library'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'next-i18next'

interface MainNavigationProps extends React.AllHTMLAttributes<HTMLUListElement> {}

export const MainNavigation: React.FC<MainNavigationProps> = ({ className, ...rest }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentRoute = useMemo(() => router.asPath, [router])

  const LinkComponent = useCallback(
    (title: string, path: string) => (
      <li>
        <Link href={path} className={currentRoute === path ? 'active' : ''}>
          {title}
        </Link>
      </li>
    ),
    [currentRoute],
  )

  return (
    <ul className={classNames('menu bg-base-200 w-56 rounded-box', className)} {...rest}>
      {LinkComponent(t('main-navigation.index'), AppRoutes.Index)}
      {LinkComponent(t('main-navigation.books'), AppRoutes.Books)}
      {LinkComponent(t('main-navigation.characters'), AppRoutes.Characters)}
    </ul>
  )
}
