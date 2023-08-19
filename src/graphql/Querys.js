import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
    query {
        posts {
            author {
                name
                avatar {
                    url
                }
            }
            id
            title
            slug
            coverPhoto {
                url
            }
        }
    }

`
const GET_AUTHOR_INFO = gql`
    query {
        authors {
            avatar {
                url
            }
            id
            name
            slug
        }
    }

`

const GET_ONE_AUTHOR_INFO = gql`
    query getOneAuthorInfo($slug : String!) {
        author(where: {slug: $slug}) {
            avatar {
                url
            }
            name
            posts {
                slug
                title
            coverPhoto {
                    url
            }
            id
            }
            description {
                html
            }
            field
        }
    }
` 
export { GET_BLOGS_INFO , GET_AUTHOR_INFO , GET_ONE_AUTHOR_INFO };