import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-visible', 'true')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    el.setAttribute('data-visible', 'false')
    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useStagger(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = el.querySelectorAll('[data-delay]')
    children.forEach((child) => child.setAttribute('data-visible', 'false'))

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.setAttribute('data-visible', 'true'))
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
