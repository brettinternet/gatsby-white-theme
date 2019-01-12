import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Circle = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border: 1.5px solid white;
  border-top-color: #ccc;
  animation-name: ${spin};
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
  width: 25px;
  height: 25px;
`

export default () => (
  <Wrapper>
    <Circle />
  </Wrapper>
)
