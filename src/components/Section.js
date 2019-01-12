import styled from 'styled-components'

const StyledSection = styled.section`
  padding: 30px 50px;
  margin: 0 auto;

  @media only screen and (max-width: 640px) {
    padding: 25px;
    width: 100%;
  }

  @media only screen and (min-width: 800px) {
    max-width: ${props => (props.maxWidth ? props.maxWidth : '640')}px;
  }
`

export default StyledSection
