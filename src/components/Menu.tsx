import * as React from 'react'
import Icon from './Icon'
import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'
import theme from '../theme'

type TMenuItem = {
  selected: boolean
}

const StyledMenu = styled.div`
  padding: 12px 0;
  background: white;
  box-shadow: 0px -2px 12px 0px rgba(192,196,204,.4);
  z-index: 2;
  a {
    text-decoration: none;
  }
  .selected {
    color: ${props => props.theme.$success}
  }
`

const MenuItem = styled(Link)<TMenuItem>`
  flex-grow: 1;
  width: 50%;
  float: left;
  color: ${props => props.theme.$normalText};
  font-size: ${props => props.theme.$normalTextSize};
  text-align: center;
  > div {
    margin-top: 4px;
    color: ${props => props.selected ? props.theme.$success : props.theme.$normalText};
    text-align: center;
  }
`

const Menu: React.FC = () => {
  const {pathname} = useLocation()

  return (
    <StyledMenu className="clearfix">
      <MenuItem to="/" selected={pathname === '/'}>
        {
          pathname === '/' ?
            <Icon name="solid-order" size={24} color={theme.$success}/> :
            <Icon name="order" size={24}/>
        }
        <div>明细</div>
      </MenuItem>
      <MenuItem to="/analysis" selected={pathname === '/analysis'}>
        {
          pathname === '/analysis' ?
            <Icon name="solid-chart" size={24} color={theme.$success}/> :
            <Icon name="chart" size={24}/>
        }
        <div>统计</div>
      </MenuItem>
    </StyledMenu>
  )
}

export default Menu
