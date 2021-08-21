// ! STAITC QUERY :  QUERY + RAFCE SAME
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  return (
    <>
      <pre>begnier way : {data.site.siteMetadata.author}</pre>
    </>
  )
}

export default ComponentName
