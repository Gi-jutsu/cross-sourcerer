import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'

export default (first: number): DocumentNode => {
  return gql`
      {
          viewer {
              repositiory(name: ${name}) {
                  nodes {
                      languages(first: ${first}) {
                          name
                      }
                  }
              }
          }
      }
  `
}