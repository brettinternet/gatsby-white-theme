import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <StyledFooter>
    Made with <Heart>♥</Heart> by @brettinternet
  </StyledFooter>
)

const StyledFooter = styled.footer`
  height: 60px;
  text-align: center;
  color: #888;
  padding: 3rem;
`

const Heart = styled.span`
  display: inline-block;
  color: red;
  font-size: 1rem;
  transform: translateY(2px);
`

export default Footer
