import React from 'react'
import Layout from 'components/Layout'
import H1 from 'components/H1'

const NotFoundPage = () => (
  <Layout
    seo={{
      title: '404: Not found',
    }}
  >
    <H1>Not found</H1>
  </Layout>
)

export default NotFoundPage
