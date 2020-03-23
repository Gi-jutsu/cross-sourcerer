import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'

export default (first: number): any => {
  return gql`
      {
          viewer {
              repositories(first:${first}, orderBy: {field: UPDATED_AT, direction: DESC}) {
                  nodes {
                      name,
                      languages(first: 2) {
                          nodes {
                              name
                          }
                      }
                      defaultBranchRef {
                          target {
                              ...on Commit {
                                  history {
                                      totalCount
                                  }
                              }
                          }
                      }
                  }

                  pageInfo {
                      hasNextPage
                  }
              }
          }
      }
  `
}