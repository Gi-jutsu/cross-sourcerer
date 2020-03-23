import React, { FunctionComponent } from 'react'
import {CssBaseline, GridList, GridListTile, Theme} from '@material-ui/core'
import {makeStyles, createStyles} from '@material-ui/styles'
import {Repository, UserProfile} from '@core/components'
import RepositoryList from '@core/components/RepositoryList'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
  }),
)

const Home: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />

      <UserProfile />
      <RepositoryList />
    </div>
  )
}

export default Home