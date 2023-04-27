import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from 'theme'
import { Button } from 'ui'

export const ErrorWrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: ${rem('30px')};
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: ${rem('10px')} ${rem('36px')};
  box-shadow: 0 ${rem('12px')} ${rem('24px')} 0 rgba(10, 7, 27, 0.05);
  margin: ${rem('10px')};
`

export const Text = styled.h1`
  font-size: ${rem('22px')};
  color: ${colors.text1};
  text-align: center;
`

export const ErrorButton = styled(Button)`
  margin-top: ${rem('5px')};
  margin-bottom: ${rem('20px')};
`

type ErrorType = {
  text?: string;
}

export function ErrorCard ({ text }: ErrorType) {
  return (
    <ErrorWrapper>
      <Text>{text || 'Something went wrong'}</Text>
      <ErrorButton onClick={() => window.location.href = '/'}>Reload page</ErrorButton>
    </ErrorWrapper>
  )
}