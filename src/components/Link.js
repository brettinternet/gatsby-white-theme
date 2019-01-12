import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link).attrs({
  to: props => props.to || '',
})`
  &:link,
  &:visited {
    color: #1c1c1c;
    text-decoration: underline;
    cursor: cursor;
  }

  &:link:active,
  &:visited:active {
    color: #1c1c1c;
  }
`

export default StyledLink
