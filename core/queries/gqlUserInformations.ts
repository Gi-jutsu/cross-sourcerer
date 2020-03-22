import gql from 'graphql-tag'

export default gql`
    query {
        viewer {
            name
            avatarUrl
            bio
        }
    }
`

