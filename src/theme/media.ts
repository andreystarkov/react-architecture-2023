import { css } from 'styled-components'

const sizes = {
  xlg: 1170,
  lg: 992,
  md: 768,
  sm: 572,
  xs: 376
}

export const media = Object.keys(sizes).reduce((accumulator: any, label: any) => {
  // @ts-ignore
  const maxWidth = sizes[label]
  accumulator[label] = (...args: any) => {
    return css`
      @media (max-width: ${maxWidth}px) {
        ${
          // @ts-ignore
          css(...args)
        }
      }
    `
  }
  return accumulator
}, {})
