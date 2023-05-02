import { classNames } from '@/library'
import React from 'react'
import { Github, LinkedIn } from '../Icons'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import DogePng from '@/assets/doge.png'
import Link from 'next/link'

interface FooterProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export const Footer: React.FC<FooterProps> = ({ className, ...rest }) => {
  const { t } = useTranslation('common')

  return (
    <footer
      className={classNames(
        'footer footer-center p-10 bg-primary text-primary-content gap-4',
        className,
      )}
      {...rest}
    >
      <div>
        <Image src={DogePng} height={100} alt={'Footer logo'} />
        <p className="text-xl font-bold">
          {t('footer.title')} <br />
        </p>
        <p>{t('footer.subtitle')}</p>
        <p>{t('footer.copyright')}</p>
      </div>
      <div>
        <div className="flex gap-4">
          <Link href="https://fr.linkedin.com/in/espel" target="_blank">
            <LinkedIn />
          </Link>
          <Link href="https://github.com/cotontigeh" target="_blank">
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  )
}
