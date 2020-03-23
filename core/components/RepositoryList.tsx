import React, { FunctionComponent, useEffect, useState } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { Repository } from '@core/components'
import { GridList, GridListTile } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/styles'
import {gqlGetRepositories} from '@core/queries'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '180px',
      flexWrap: 'nowrap',
      overflowY: 'hidden',
      transform: 'translateZ(0)',
    },
  }),
)

const RepositoryList: FunctionComponent = () => {
  const [repositories, setRepositories] = useState([])
  const apolloClient = useApolloClient()
  const classes = useStyles()

  const loadRepositories = (first: number = 10) => {
    apolloClient
      .query({ query: gqlGetRepositories(first) })
      .then(({ data: { viewer } }) => {
        const { repositories: repos } = viewer
        const { pageInfo } = repos

        if (pageInfo.hasNextPage) loadRepositories(first + 10)

        setRepositories([
          ...repositories,
          ...repos.nodes
        ])
      })
  }

  useEffect(() => {
    loadRepositories()
  }, [])

  useEffect(() => {

  }, [repositories])

  return (
      <GridList className={classes.root}>
        {repositories.map(repository => (
          <GridListTile>
            {
              (repository.defaultBranchRef) ?
                <Repository name={repository.name} commitCount={repository.defaultBranchRef.target.history.totalCount}/>:
                <Repository name={repository.name} commitCount={0} />
            }
          </GridListTile>
        ))}
      </GridList>
  )
}

export default RepositoryList