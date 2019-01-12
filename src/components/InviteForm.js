import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import Input from 'components/Input'
import serialize from 'utils/serialize'
import request from 'utils/request'
import Button from 'components/Button'
import H1 from 'components/H1'
import Loader from 'components/Loader'
import Link from 'components/Link'

const GOOGLE_SHEETS_DB =
  'https://script.google.com/macros/s/AKfycbxfAo7X5nz3tXCMukar2IrGDykpGKKI0q3SKONbvFYrDgH4QlM/exec'

const StyledButton = styled(Button)`
  margin: 1rem auto;
  display: block;
  height: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

const initialState = {
  isLoading: false,
  isFormSuccess: false,
  isFormError: false,
  errorMessage: undefined,
}

class InvitePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  _handleSubmit = ev => {
    ev.preventDefault()
    ev.persist()
    this.setState({ isLoading: true }, () => this._postForm(ev))
  }

  _getName = form => {
    if (!form || !form.elements) return
    const firstName = form.elements['first_name']
    const lastName = form.elements['last_name']
    return firstName && lastName && `${firstName.value} ${lastName.value}`
  }

  _postForm = ev => {
    const form = ev.target
    const name = this._getName(form)
    const data = serialize(form)
    request(`${GOOGLE_SHEETS_DB}?${data}`)
      .then(response => {
        if (response.result === 'success') {
          const successMessage =
            name &&
            typeof name === 'string' &&
            `${name} has been added to the list`
          this.setState({
            successMessage,
            isFormSuccess: true,
            isLoading: false,
          })
          // TODO: reset some state values
          ev.target.reset()
        }
      })
      .catch(error => {
        const { message } = error
        this.setState({
          errorMessage: message,
          isFormError: true,
          isLoading: false,
        })
      })
  }

  _resetState = () => this.setState(initialState)

  render() {
    const {
      isFormSuccess,
      successMessage,
      isFormError,
      errorMessage,
    } = this.state
    return (
      <Section>
        {isFormError
          ? this._renderError(errorMessage)
          : isFormSuccess
          ? this._renderSuccess(successMessage)
          : this._renderForm(this.state)}
      </Section>
    )
  }

  _renderError = message => {
    return (
      <div style={{ textAlign: 'center' }}>
        <H1>Oops! There was an issue saving your form.</H1>
        <p>{message}</p>
        <Button
          onClick={this._resetState}
          text="Try again"
          style={{ margin: 'auto', display: 'block' }}
        />
      </div>
    )
  }

  _renderSuccess = message => {
    return (
      <div style={{ textAlign: 'center' }}>
        <H1>Thank you</H1>
        <p>{message || 'Saved!'}</p>
        <Button
          onClick={this._resetState}
          text="Request another"
          style={{ margin: 'auto', display: 'block' }}
        />
        <span>
          or <Link to="/photos/">view photos</Link>
        </span>
      </div>
    )
  }

  _renderForm = state => {
    const sharedProps = {
      disabled: state.isLoading,
    }
    return (
      <form name="Invite" onSubmit={this._handleSubmit}>
        <H1>Request an invitation</H1>
        <noscript>Warning: This form doesn't work without JavaScript</noscript>
        <div>
          <Input
            label="First name"
            type="text"
            name="first_name"
            required
            {...sharedProps}
          />
          <Input
            label="Last name"
            type="text"
            name="last_name"
            required
            {...sharedProps}
          />
        </div>
        <Input
          label="Address line 1"
          type="text"
          name="street_1"
          required
          {...sharedProps}
        />
        <Input
          label="Address line 2"
          type="text"
          name="street_2"
          {...sharedProps}
        />
        <Input label="City" type="text" name="city" required {...sharedProps} />
        <div style={{ display: 'flex' }}>
          <Input
            label="State"
            type="text"
            name="state"
            required
            style={{ width: '100%' }}
            {...sharedProps}
          />
          <Input
            label="Zip"
            type="text"
            name="zip"
            required
            style={{ marginLeft: '20px', width: '100%' }}
            {...sharedProps}
          />
        </div>
        <StyledButton type="submit" {...sharedProps}>
          {state.isLoading ? <Loader /> : 'Submit'}
        </StyledButton>
      </form>
    )
  }
}

export default InvitePage
