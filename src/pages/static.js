// ! Staic QUERY
import React from 'react'
import SyntaxTwo from '../graphql_lesson/syntaxTwo'
import SyntaxOne from '../graphql_lesson/syntaxOne'
import Layout from '../components/Layout'

const Learn = props => {
  console.log(props)
  return (
    <Layout>
      <SyntaxTwo />
      <SyntaxOne />
    </Layout>
  )
}

export default Learn
