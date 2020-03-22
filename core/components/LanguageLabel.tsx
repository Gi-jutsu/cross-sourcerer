import React, { FunctionComponent } from 'react'

const LanguageLabel: FunctionComponent<{name: string}> = ({ name }) => {
  return (
    <p> Language: {name} </p>
  )
}

export default LanguageLabel