import { classNames } from '@/library'
import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface ItemProps {
  className?: string
  children: JSX.Element | JSX.Element[] | string | string[]
  href: string
}

export const Item: React.FC<ItemProps> = ({ className, children, href }) => {
  return (
    <Link
      href={href}
      className={classNames(
        'flex justify-between items-center',
        'rounded border border-gray-100 bg-white p-2 cursor-pointer',
        'transition delay-150 duration-200',
        'hover:bg-gray-50 hover:text-primary-focus',
        className,
      )}
    >
      <div>{children}</div>
      <ChevronRightIcon className="h-4" />
    </Link>
  )
}
