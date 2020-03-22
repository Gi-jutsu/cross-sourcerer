import React, { FunctionComponent } from 'react'
import {CssBaseline, GridList, GridListTile, Theme} from '@material-ui/core'
import {makeStyles, createStyles} from '@material-ui/styles'
import {Repository, UserProfile} from '@core/components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);

const Home: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <UserProfile />

      <GridList className={classes.gridList} cols={2.5}>
        <GridListTile key='pok'>
          <Repository name='Pokedex'/>
        </GridListTile>

        <GridListTile key='pok2'>
          <Repository name='Pokedex'/>
        </GridListTile>

        <GridListTile key='pok3'>
          <Repository name='Pokedex'/>
        </GridListTile>

        <GridListTile key='pok4'>
          <Repository name='Pokedex'/>
        </GridListTile>

        <GridListTile key='pok2'>
          <Repository name='Pokedex'/>
        </GridListTile>

        <GridListTile key='pok2'>
          <Repository name='Pokedex'/>
        </GridListTile>
      </GridList>
    </div>
  )
}

export default Home