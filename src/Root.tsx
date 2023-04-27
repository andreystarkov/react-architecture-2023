
import { BrowserRouter } from 'react-router-dom'
import { RootWrapper } from 'layout'
import { RouterContainer } from 'router'
import { GlobalStyle } from 'layout/GlobalStyles'

function Root () {
  return (
    <RootWrapper>
      <BrowserRouter>
        <RouterContainer />
      </BrowserRouter>
      <GlobalStyle />
    </RootWrapper>
  )
}

export default Root;

