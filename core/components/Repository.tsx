import React, {FunctionComponent, useEffect, useState} from 'react'
import { Chip, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {useApolloClient} from '@apollo/react-hooks'
import gql from 'graphql-tag'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    height: '180px',
    margin: '4px',
    overflow: 'hidden',
  }
})

const Repository: FunctionComponent<{name: string, commitCount: number}> = ({ name, commitCount }) => {
  const classes = useStyles()
  const apolloClient = useApolloClient()
  const [languages, setLanguages] = useState([])

  const loadLanguages = (first: number = 10) => {
    apolloClient.query({
      query: gql`{
          viewer {
              repository(name: "${name}") {
                  languages(first: 2) {
                      nodes {
                          name
                      }
                  }
              }
          }
      }`,
    })
    .then(({ data: { viewer } }) => {
      if (viewer.repository === null) return

      const langs = viewer.repository.languages

      setLanguages([
        ...languages,
        ...langs.nodes,
      ])
    })
  }

  useEffect(() => {
    loadLanguages()
  }, [])

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>

      {languages.map(({ name }) => {
        return <Chip label={name}/>
      })}

      <br />

      <p> N° Commits: {commitCount}</p>
    </div>
  )
}

export default Repository