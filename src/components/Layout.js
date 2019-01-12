import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from 'components/Header'
import Footer from 'components/Footer'
import SEO, { seoPropTypes } from 'components/Seo'
import SiteTitle from 'components/SiteTitle'
import './global.css'

const Layout = ({ children, seo }) => (
  <Fragment>
    <SEO {...seo} />
    <Header />
    <SiteTitle />
    <Content>{children}</Content>
    <Footer />
  </Fragment>
)

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.shape(seoPropTypes),
}

export default Layout
