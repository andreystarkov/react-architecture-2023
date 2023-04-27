
import { useRoutes } from 'react-router-dom'
import { MainScreen, UserScreen } from 'screens'

export function RouterContainer () {
  return useRoutes([
    {path: '/', element: <MainScreen />},
    {path: '/user/:userId', element: <UserScreen />},
  ])
}
