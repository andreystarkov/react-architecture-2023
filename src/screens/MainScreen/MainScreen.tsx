import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'

import { colors, icons } from 'theme'
import { ScreenWrapper } from 'layout'
import { useGetAllUsersQuery, UserType } from 'stores'

import { TabWrapper, TabLink, Avatar, SearchInput, UserName, UserCard, CardsWrapper, SearchWrapper, SearchIcon } from './MainScreenStyles'


const NAME_MAX_LENGTH = 11
const MAX_ITEMS_PER_PAGE = 8

export function MainScreen () {
  const navigate = useNavigate()
	const response = useGetAllUsersQuery()
  const { isLoading, data } = response
  const [users, setUsers] = useState<UserType[]>([]);
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    if (data instanceof Array) {
      setUsers(data)
    }
  }, [data])

  const currentPageLimit = currentPage * MAX_ITEMS_PER_PAGE
  const pagesCount = Math.round(users?.length / MAX_ITEMS_PER_PAGE)

  const filterSearch = (f: UserType) =>
    f.name.toLowerCase().includes(search.toLowerCase())

  const filterPage = (f: UserType, index: number) =>
    search.length === 0
      ? index >= currentPageLimit && index <= currentPageLimit + MAX_ITEMS_PER_PAGE - 1
      : true

  const renderUsers = (user: UserType) => {
    return (
      <UserCard key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
        <UserName>
          {user.name.length > NAME_MAX_LENGTH
            ? user.name.substring(0, NAME_MAX_LENGTH) + '...' : user.name}
        </UserName>
        <Avatar src={user.avatar} alt={user.name} />
      </UserCard>
    )
  }

  const renderPageButton = (e: number, i: number) =>
    <TabLink
      active={currentPage === i + 1}
      key={`page:${i}`}
      onClick={() => setCurrentPage(i + 1)}>
        {`${i + 1}`}
    </TabLink>

  return (
    <ScreenWrapper>
      {isLoading
        ? <div style={{ marginTop: '30%' }}>
            <MoonLoader size={100} color={colors.blue} />
          </div>
        : <>
          <SearchWrapper>
            <SearchIcon className='search-icon' src={icons.search} alt='Search' />
            <SearchInput
              type='text'
              placeholder='Search'
              onChange={e => setSearch(e.target.value)}
              value={search} />
          </SearchWrapper>
          <CardsWrapper>
            {users?.filter(filterSearch).filter(filterPage).map(renderUsers)}
          </CardsWrapper>
          <TabWrapper>
              {search.length === 0 ? [...Array(pagesCount)].map(renderPageButton) : null}
          </TabWrapper>
        </>}
    </ScreenWrapper>
  )
}