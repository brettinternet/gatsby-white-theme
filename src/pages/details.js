import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Section from 'components/Section'
import H1 from 'components/H1'

const RegistryPage = () => {
  return (
    <Layout
      seo={{
        title: 'Details',
        description: 'When and where?',
      }}
    >
      <Section maxWidth={400}>
        <H1>Details</H1>
        <P>
          <strong>ABC Inc.</strong>
        </P>
        <P>123 Main St.</P>
        <P>Portland, OR 91210</P>
      </Section>
    </Layout>
  )
}

const P = styled.p`
  margin: 0;
`

export default RegistryPage
