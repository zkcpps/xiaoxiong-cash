import * as React from 'react'
import styled from 'styled-components'
import Menu from './Menu'

const StyledLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  padding: 25px 14px 16px;
  background: ${props => props.theme.$success};
  color: ${props => props.theme.$white};
  border-bottom: 1px solid rgba(18,18,18,.1); 
  box-shadow: 0 1px 3px rgba(18,18,18,.1); 
  .title {
    text-align: center;
    font-size: ${props => props.theme.$largeTextSize};
  }
`

const Layout: React.FC = (props) => {
  return (
    <StyledLayout>
      <Header>
        <p className="title">小熊记账本</p>
      </Header>

      {props.children}

      <Menu/>
    </StyledLayout>
  )
}

export default Layout
