import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { rem } from 'polished'
import { fonts, colors } from 'theme'

type TabType = {
  active?: boolean | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: string;
}

export const SearchIcon = styled.img`
  position: absolute;
  top: ${rem('13px')};
  left: ${rem('15px')};
  width: ${rem('20px')};
  height: ${rem('20px')};
  opacity: 0.2;
  transition: 1s linear all;
`

export const SearchWrapper = styled.div`
  position: relative;
  width: 98%;
  &:hover {
    ${SearchIcon} {
      opacity: 1
    }
  }
`

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: ${colors.white};
  border-radius: ${rem('10px')};
  padding: 10px 43px;
  color: ${colors.black};
  font-weight: 600;
  font-size: ${rem('16px')};
`

export const Avatar = styled.img`
  border-radius: 50%;
  margin-top: ${rem('10px')};
  margin-bottom: ${rem('10px')}''
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-flow: row wrap;
  margin-top: ${rem('20px')};
`

export const UserCard = styled.div`
  display: flex;
  position: relative;
  width: ${rem('210px')};
  height: ${rem('230px')};
  border-radius: ${rem('30px')};
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${colors.white};
  padding: ${rem('36px')};
  box-shadow: 0 ${rem('12px')} ${rem('24px')} 0 rgba(10, 7, 27, 0.05);
  margin: ${rem('10px')};
  cursor: pointer;
  transition: 0.35s linear all;
  &:hover {
    opacity: 0.55;
  }
`

export const UserName = styled.h1`
  font-size: ${rem('16px')};
  margin-bottom: ${rem('10px')};
  font-weight: 800;
  text-align: center;
  display: block;
  width: 100%;
  color: ${colors.black};
`

export const TabWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${rem('20px')};
`

export const TabLink = styled.span<TabType>`
  font-family: ${fonts.main};
  color: ${props => props.active ? colors.blue : colors.text2};
  font-size: ${rem('17px')};
  display: inline-block;
  margin-right: ${rem('10px')};
  cursor: pointer;
  font-weight: 700;
  background-color: ${colors.white};
  padding: ${rem('10px')} ${rem('20px')};
  border-radius: ${rem('5px')};
  transition: all 0.45s;
  margin-top: ${rem('30px')};
  opacity: 0.8;
  &:hover {
    opacity: ${props => props.active ? '1' : '0.6'};
  }
  ${props => props.active ? `
    background-color: ${colors.blue};
    color: ${colors.white};
  ` : null}
`