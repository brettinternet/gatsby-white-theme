import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import WideSection from 'components/WideSection'
import Gallery from 'components/Gallery'

const HOME_KEYWORDS = ['event', 'gatsby', 'theme', 'photos', 'pics', 'wedding']

const PhotosPage = ({ data }) => {
  const images = data.gallery.edges
  return (
    <Layout
      seo={{
        title: 'Photos',
        keywords: HOME_KEYWORDS,
        description: 'View our photographs',
      }}
    >
      <WideSection>
        <Gallery images={images} />
      </WideSection>
    </Layout>
  )
}

export default PhotosPage

export const query = graphql`
  query BlurUpQuery {
    gallery: allFile(filter: { relativePath: { regex: "/gallery/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 1800) {
              ...GatsbyImageSharpSizes
            }
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
