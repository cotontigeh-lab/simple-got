import { classNames } from '@/library'
import React, { useCallback, useState } from 'react'
import { Footer, LanguageSelector, MainNavigation } from '@/components'
import { MainMobileNavigation } from '@/components/MainNavigation/MainMobileNavigation'
import { Github, LinkedIn } from '@/components/Icons'

interface MainLayoutProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  className,
  title,
  children,
  ...rest
}) => {
  return (
    <>
      <MainMobileNavigation />

      <div
        className={classNames(
          'container mx-auto pt-14 md:pt-10 relative px-4 min-h-screen',
          className,
        )}
        {...rest}
      >
        <LanguageSelector />
        <div className="flex gap-8">
          <div className="hidden md:block">
            <MainNavigation />
          </div>
          <div className="w-full">
            <h1>{title}</h1>
            <div className="divider"></div>
            <div>{children}</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
