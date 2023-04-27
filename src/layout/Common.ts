import styled from 'styled-components'
import { rem } from 'polished'
import { media } from 'theme'

export const ScreenWrapper = styled.div`
  display: flex;
  padding-top: ${rem('100px')};
  flex-direction: column;
  align-items: center;
  max-width: ${rem('920px')};
  width: ${rem('1000px')};
  height: 100%;
  padding-bottom: ${rem('100px')};
  ${media.sm`
    margin-top: 0;
    padding-top: ${rem('20px')};
  `}
`
