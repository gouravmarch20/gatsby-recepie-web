// ! STATIC QUERY : QUERY THE acess in rafce
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`
const FetchData = () => {
  const {
    site: {
      siteMetadata: { title }
    }
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>Shortcut way : {title}</h2>
    </div>
  )
}

export default FetchData
