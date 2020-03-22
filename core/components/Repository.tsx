import React, { FunctionComponent } from 'react'
import { Card, CardContent, Chip, Typography } from '@material-ui/core'

const Repository: FunctionComponent<{name: string}> = ({ name } ) => {
  return (
    <Card>
      <CardContent>
        <Typography>
          {name}
        </Typography>

        <Chip label="Javascript" />
      </CardContent>
    </Card>
  )
}

export default Repository