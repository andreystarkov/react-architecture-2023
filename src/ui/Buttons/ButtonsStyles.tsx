import styled from 'styled-components'
import { rem } from 'polished'
import { colors, fonts } from 'theme'

export const ButtonComponent = styled.button`
  padding: ${rem('10px')} ${rem('15px')};
  font-family: ${fonts.main};
  font-size: ${rem('17px')};
  font-weight: 800;
  text-align: center;
  width: 100%;
  background-color: ${colors.blue};
  border-radius: ${rem('30px')};
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  transition: 0.4s ease-in-out all;
  outline: 0;
  border: 0;
  color: #fff;
  &:hover {
    opacity: 0.666;
  }
`

export const Icon = styled.img`
  margin-right: ${rem('10px')};
`