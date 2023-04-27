import styled from 'styled-components'
import { rem } from 'polished'

export const ScreenWrapper = styled.div`
  display: flex;
  margin-top: ${rem('100px')};
  flex-direction: column;
  align-items: center;
  max-width: ${rem('920px')};
  width: ${rem('1000px')};
  height: 100%;
`
