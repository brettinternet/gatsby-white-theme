import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const pages = [
  {
    name: 'Invite',
    to: '/',
  },
  {
    name: 'Photos',
    to: '/photos/',
  },
  {
    name: 'Registry',
    to: '/registry',
  },
  {
    name: 'Details',
    to: '/details',
  },
]

const NavLinks = ({ links }) => (
  <ul>
    {links.map(({ name, to, ...otherProps }) => (
      <li key={name}>
        <StyledLink activeClassName={activeClassName} to={to} {...otherProps}>
          {name}
        </StyledLink>
      </li>
    ))}
  </ul>
)

class Header extends React.Component {
  state = {
    mobileNavActive: false,
  }

  toggleMobileNav = () =>
    this.setState(state => ({ mobileNavActive: !state.mobileNavActive }))

  render() {
    const { mobileNavActive } = this.state
    return (
      <StyledHeader>
        <MobileNav>
          <MenuButton onClick={this.toggleMobileNav}>
            {mobileNavActive ? 'Close' : 'Menu'}
          </MenuButton>
          {mobileNavActive && <NavLinks links={pages} />}
        </MobileNav>
        <MainNav>
          <NavLinks links={pages} />
        </MainNav>
      </StyledHeader>
    )
  }
}

const StyledHeader = styled.header`
  nav ul li {
    display: inline-block;
    line-height: 1.25em;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: 400;
    font-style: normal;
    list-style-type: none;

    a {
      color: #1c1c1c;
    }
    a:hover {
      color: rgba(28, 28, 28, 0.5);
    }
  }
`

const MainNav = styled.nav`
  display: block;
  position: relative;
  top: auto;
  left: auto;
  width: 60%;
  margin: 0 auto;

  ul {
    margin: 1em auto 20px;
    text-align: center;
    padding: 0;

    li {
      padding: 1em 1em 0;
      margin: 0;
    }
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`

const MobileNav = styled.nav`
  display: none;
  width: 100%;
  padding: 1em 0;
  text-align: center;

  ul {
    margin: 1.25em 0 0;
    background-color: rgba(204, 204, 204, 0.2);

    li {
      width: 100%;
      margin: 0 0 1.25em 0;
    }

    li:first-child {
      margin-top: 1.25em;
    }
  }

  @media only screen and (max-width: 640px) {
    display: block;
  }
`

const MenuButton = styled.span`
  color: #1c1c1c;
  background: #fff;
  border-radius: 0;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.25em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: 400;
  font-style: normal;
  user-select: none;
`

const activeClassName = 'nav-item-active'
const StyledLink = styled(Link).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    font-weight: bold;
  }
`

export default Header
