import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 12px;
`

const StyledLabel = styled.label`
  display: block;

  &[required]:after {
    content: ' *';
    color: rgb(168, 0, 0);
    padding-right: 12px;
  }
`

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin: 6px 0 4px;
  border: 1px solid #ccc;
  color: #000;
  font-family: sans-serif;
  font-size: 16px;
  line-height: normal;
  box-sizing: border-box;
  border-radius: 2px;
  -webkit-appearance: none;

  &[disabled] {
    color: #999;
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 6px 0 4px;
  border: 1px solid #ccc;
  color: #000;
  font-family: sans-serif;
  font-size: 16px;
  line-height: normal;
  box-sizing: border-box;
  border-radius: 2px;
  -webkit-appearance: none;
  min-height: 100px;
  resize: vertical;
  overflow: auto;
  vertical-align: top;

  &[disabled] {
    color: #999;
  }
`

class Input extends React.Component {
  constructor(props) {
    super(props)

    let value = props.value
    if (!value && value !== 0) {
      value = ''
    }

    this.state = {
      value,
    }
  }

  _handleChange = ev => {
    this.setState({ value: ev.target.value })
  }

  render() {
    const {
      label,
      name,
      required,
      multiline,
      type,
      value,
      style,
      onChange,
      disabled,
      ...otherProps
    } = this.props
    const inputAttributes = {
      name,
      type,
      required,
      value: onChange ? value : this.state.value,
      onChange: onChange || this._handleChange,
      disabled,
      id: name || label,
      ...otherProps,
    }
    return (
      <Wrapper style={style}>
        <StyledLabel
          required={required}
          htmlFor={inputAttributes.id}
          disabled={disabled}
        >
          {label}
        </StyledLabel>
        {multiline ? (
          <StyledTextarea {...inputAttributes} />
        ) : (
          <StyledInput {...inputAttributes} />
        )}
      </Wrapper>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
}

export default Input
