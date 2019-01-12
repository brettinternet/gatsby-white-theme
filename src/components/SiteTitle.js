import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Wrapper = styled.div`
  font-family: 'Lato', 'Source Sans Pro', Tahoma, Arial, sans-serif;
  margin: 0 auto;
  position: relative;
  padding: 15px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  line-height: 1.75em;
  text-transform: none;
  letter-spacing: 0.4px;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  color: rgba(28, 28, 28, 0.9);

  h1 {
    font-size: 72px;
    line-height: 1.1em;
    text-transform: capitalize;
    text-decoration: none;
    text-align: center;
    font-weight: 100;
    font-style: normal;
    color: #1c1c1c;
    margin-top: 5px;
    margin-bottom: 16px;
    display: inline-block;
    width: 100%;

    @media only screen and (max-width: 600px) {
      font-size: 56px;
    }

    a {
      text-decoration: none;
      color: #1c1c1c;
    }
  }
`

const P = styled.p`
  font-size: 14px;
  line-height: 1.25em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: 400;
  font-style: normal;
  color: rgba(28, 28, 28, 0.8);
  margin: 7px;
`

const SiteTitle = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      const title = data.site.siteMetadata.title
      const description = data.site.siteMetadata.description
      return (
        <Wrapper>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          {description && <P>{description}</P>}
        </Wrapper>
      )
    }}
  />
)

export default SiteTitle
