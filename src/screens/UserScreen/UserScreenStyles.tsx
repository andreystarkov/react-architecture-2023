import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from 'theme'
import { Button } from 'ui'
import { ScreenWrapper } from 'layout'

export const UserDetails = styled.div`
  display: flex;
  position: relative;
  border-radius: ${rem('30px')};
  flex-direction: column;
  display: flex;
  align-items: center;
  max-width: ${rem('350px')};
  justify-content: center;
  background-color: ${colors.white};
  padding: ${rem('36px')};
  box-shadow: 0 ${rem('12px')} ${rem('24px')} 0 rgba(10, 7, 27, 0.05);
  margin: ${rem('10px')};
`

export const BackButton = styled(Button)`
  margin-top: 20px;
`

export const UserScreenWrapper = styled(ScreenWrapper)`
  align-items: center;
  justify-content: center;
`
export const Avatar = styled.img`
  border-radius: 50%;
  margin-top: ${rem('10px')};
  margin-bottom: ${rem('10px')}''
`

export const UserName = styled.h1`
  font-size: ${rem('25px')};
  margin-bottom: ${rem('10px')};
  font-weight: 800;
  text-align: center;
  display: inline-block;
  color: ${colors.black};
`

export const UserDescription = styled.p`
  font-size: ${rem('18px')};
  margin-top: ${rem('25px')};
  font-weight: 400;
  font-style: italic;
  text-align: left;
  display: block;
  color: ${colors.text1};
`

