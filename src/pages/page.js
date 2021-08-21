// ! Page QUERY
import React from 'react'
import { graphql } from 'gatsby'

const page = ({ data }) => {
  return (
    <div>
      {console.log(data)}

      <h1>{data.site.siteMetadata.author}</h1>
    </div>
  )
}
export const data = graphql`
  {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`
export default page
