import { useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

import { useGetUserQuery } from 'stores'
import { colors } from 'theme'
import { ErrorCard } from 'ui'
import { UserDetails, UserName, UserDescription, Avatar, UserScreenWrapper, BackButton } from './UserScreenStyles'

export function UserScreen () {
  const navigate = useNavigate()
  const { userId } = useParams()
	const response = useGetUserQuery(`${userId}`)
  const { isLoading, isError, data } = response

  return (
    <UserScreenWrapper>
      {isError ? <ErrorCard /> : isLoading
        ? <div style={{ marginTop: '30%' }}>
            <MoonLoader size={120} color={colors.blue} />
          </div>
        : <>
          <UserDetails>
            <UserName>{data?.name}</UserName>
            <Avatar src={data?.avatar} alt={data?.name} />
            <UserDescription>{data?.description}</UserDescription>
            <BackButton onClick={() => navigate('/')} icon='back'>Back</BackButton>
          </UserDetails>
      </>}
    </UserScreenWrapper>
  )
}