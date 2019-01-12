import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 0;
  transition: 0.1s opacity linear;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  background-color: rgba(28, 28, 28, 0.95);
  border-color: rgba(28, 28, 28, 0.95);
  display: inline-block;
  width: auto;
  height: auto;
  padding: 1em 2.5em;
  border-width: 0;
  text-align: center;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  user-select: none;
  white-space: pre;
  border-radius: 2px;

  &[disabled] {
    background-color: #999;
  }
`

const Button = props => {
  const { text, children, ...buttonAttributes } = props
  return <StyledButton {...buttonAttributes}>{text || children}</StyledButton>
}

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Button
