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
export { GET_BLOGS_INFO , GET_AUTHOR_INFO };