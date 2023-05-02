import { classNames } from '@/library'
import React, { useCallback, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { MainNavigation } from './MainNavigation'

interface MainMobileNavigationProps extends React.AllHTMLAttributes<HTMLUListElement> {}

const iconClassName = classNames('fixed top-4 left-4', 'h-8 p-2 bg-white rounded shadow')

export const MainMobileNavigation: React.FC<MainMobileNavigationProps> = ({
  className,
  ...rest
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleMobileNavClick = useCallback(
    () => setIsActive((prevValue) => !prevValue),
    [],
  )

  return (
    <>
      <div className="md:hidden p-2 fixed z-50">
        <MainNavigation
          className={classNames(
            'relative top-12',
            isActive ? 'block' : 'hidden',
            className,
          )}
          {...rest}
        />

        {isActive ? (
          <XMarkIcon className={iconClassName} onClick={handleMobileNavClick} />
        ) : (
          <Bars3Icon className={iconClassName} onClick={handleMobileNavClick} />
        )}
      </div>

      {isActive ? (
        <div
          className="absolute bg-slate-400 min-h-full min-w-full z-40 top-0 opacity-40"
          onClick={handleMobileNavClick}
        />
      ) : null}
    </>
  )
}
