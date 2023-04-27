import { useParams } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

import { useGetUserQuery } from 'stores'
import { colors } from 'theme'

import { UserDetails, UserName, UserDescription, Avatar, UserScreenWrapper, BackButton } from './UserScreenStyles'

export function UserScreen () {
  const navigate = useNavigate()
  const { userId } = useParams()
	const response = useGetUserQuery(`${userId}`)
  const { isLoading, data } = response

  return (
    <UserScreenWrapper>
      {isLoading
        ? <CircleLoader size={20} color={colors.blue} />
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