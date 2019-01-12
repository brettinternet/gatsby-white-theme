import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import Section from 'components/WideSection'
import H1 from 'components/H1'
import Img from 'gatsby-image'

const registries = [
  {
    key: 'amazon',
    href: 'http://amazon.com',
  },
  {
    key: 'target',
    href: 'http://target.com',
  },
  {
    key: 'rei',
    href: 'http://rei.com',
  },
  {
    key: 'westelm',
    href: 'http://west-elm.com',
  },
]

const RegistryPage = ({ data }) => {
  return (
    <Layout
      seo={{
        title: 'Registry',
      }}
    >
      <Section>
        <H1>Find our registries at the following stores:</H1>
        <Grid>
          {registries.map(
            ({ key, href }) =>
              data[key] && (
                <ImgWrapper>
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={data[key].childImageSharp.fluid} />
                  </a>
                </ImgWrapper>
              )
          )}
        </Grid>
      </Section>
    </Layout>
  )
}

const ImgWrapper = styled.div`
  /* width: 50%; */
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  grid-gap: 10px;
`

export default RegistryPage

export const companyLogo = graphql`
  fragment companyLogo on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    amazon: file(relativePath: { eq: "registry/amazon.png" }) {
      ...companyLogo
    }
    target: file(relativePath: { eq: "registry/target.png" }) {
      ...companyLogo
    }
    rei: file(relativePath: { eq: "registry/rei.png" }) {
      ...companyLogo
    }
    westelm: file(relativePath: { eq: "registry/westelm.png" }) {
      ...companyLogo
    }
  }
`
