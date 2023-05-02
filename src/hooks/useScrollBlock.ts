import { useRef } from 'react'

export const useScrollBlock = () => {
  const scroll = useRef(false)

  const blockScroll = () => {
    if (typeof document === 'undefined') return

    const html = document.documentElement
    const { body } = document

    if (!body || !body.style || scroll.current) return

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.paddingRight = `0px`

    scroll.current = true
  }

  const allowScroll = () => {
    if (typeof document === 'undefined') return

    const html = document.documentElement
    const { body } = document

    if (!body || !body.style || !scroll.current) return

    html.style.overflow = ''
    body.style.overflow = ''
    body.style.paddingRight = ''

    scroll.current = false
  }

  return [blockScroll, allowScroll]
}
