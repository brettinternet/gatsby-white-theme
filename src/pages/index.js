import React from 'react'
import Layout from 'components/Layout'
import InviteForm from 'components/InviteForm'

const HOME_KEYWORDS = ['gatsby', 'theme', 'invite', 'marriage', 'wedding']

const IndexPage = () => (
  <Layout
    seo={{
      title: 'Invite',
      keywords: HOME_KEYWORDS,
      description: 'Request to receive an invitation',
    }}
  >
    <InviteForm />
  </Layout>
)

export default IndexPage
