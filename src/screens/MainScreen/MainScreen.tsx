import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'

import { colors, icons } from 'theme'
import { ScreenWrapper } from 'layout'
import { useGetAllUsersQuery, UserType } from 'stores'
import { ErrorCard } from 'ui'

import { TabWrapper, TabLink, Avatar, SearchInput, UserName,
  UserCard, CardsWrapper, SearchWrapper, SearchIcon } from './MainScreenStyles'

const NAME_MAX_LENGTH = 11
const MAX_ITEMS_PER_PAGE = 8

type SearchType = {
  search: string;
  data: UserType[];
}


const searchFilter = ({ search, data }: SearchType): UserType[] => {
  return data?.filter(f => {
    const text = f.name.toLowerCase()
    const entryIncludanceCheck = (textEntry: string) => !!text.includes(textEntry.toLowerCase())
    const hasMultipleEntries = search.includes(' ')
    return hasMultipleEntries
      ? search.split(' ').every(entryIncludanceCheck)
      : text.includes(search.toLowerCase())
  })
}

export function MainScreen () {
  const navigate = useNavigate()
	const response = useGetAllUsersQuery()
  const { isLoading, isError, data } = response
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

  const usersData = search.length ? searchFilter({ search, data: users }) : users

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
      {isError ? <ErrorCard /> : isLoading
        ? <div style={{ marginTop: '25%' }}>
            <MoonLoader size={120} color={colors.blue} />
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
            {usersData?.filter(filterPage).map(renderUsers)}
          </CardsWrapper>
          <TabWrapper>
              {search.length === 0 ? [...Array(pagesCount)].map(renderPageButton) : null}
          </TabWrapper>
        </>}
    </ScreenWrapper>
  )
}