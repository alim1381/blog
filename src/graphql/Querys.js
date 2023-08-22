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

const GET_POST_INFO = gql`
    query getPostInfo ($slug : String!) {
        post(where: {slug: $slug}) {
            author {
                name
                field
                avatar {
                    url
                }
                slug
            }
            coverPhoto {
                url
            }
            title
            content {
                html
            }
        }
    }

`

const GET_POST_COMMENTS = gql`
    query getPostComment ($slug : String!) {
        comments(where: {post: {slug: $slug}}) {
            id
            text
            name
        }
    }

`
export { GET_BLOGS_INFO , GET_AUTHOR_INFO , GET_ONE_AUTHOR_INFO , GET_POST_INFO , GET_POST_COMMENTS };