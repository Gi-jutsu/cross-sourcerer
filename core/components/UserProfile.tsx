import React, { FunctionComponent } from 'react'
import { Skeleton } from '@material-ui/lab'
import { Avatar, Typography } from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks'
import { gqlUserInformations } from '@core/queries'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootTest: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'fit-content'
    },
    avatar: {
      width: '80px',
      height: '80px',
      marginTop: theme.spacing(2),
    },
    name: {
      marginTop: theme.spacing(1),
    }
  })
)

const UserProfile: FunctionComponent = () => {
  const classes = useStyles()
  const { loading, error, data } = useQuery(gqlUserInformations)

  if (error) return <p> Error: {error.message} </p>

  return (
    <React.Fragment>
      { loading && (
        <div>
          <Skeleton variant='circle' width={80} height={80} />
          <Skeleton variant='text' />
        </div>
      )}

      { !loading && !error && (
        <div className={classes.rootTest}>
          <Avatar
            className={classes.avatar}
            alt={data.viewer.name}
            src={data.viewer.avatarUrl}
          />

          <Typography
            className={classes.name}
            variant='h4'
          >
            {data.viewer.name}
          </Typography>

          <p> {data.viewer.bio} </p>
        </div>
      )}
    </React.Fragment>
  )
}

export default UserProfile