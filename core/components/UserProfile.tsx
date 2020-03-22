import React, { FunctionComponent } from 'react'
import { gqlUserInformations } from '@core/queries'
import { useQuery } from '@apollo/react-hooks'

const UserProfile: FunctionComponent = () => {
  const { loading, error, data } = useQuery(gqlUserInformations)

  if (loading) return <p> Loading ... </p>
  if (error) return <p> Error: {error.message} </p>

  return (
    <React.Fragment>
      <p> User: {data.viewer.name}</p>

      <img src={data.viewer.avatarUrl} alt='avatar' />
    </React.Fragment>
  )
}

export default UserProfile