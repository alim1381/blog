import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
    mutation createComment ($name : String! , $email : String! , $text : String! , $slug : String!) {
        createComment(
            data: {name: $name, email: $email, text: $text, post: {connect: {slug: $slug}}}
        ) {
            id
        }
    }

`
const CREATE_POST = gql`
    mutation createPost (
        $title : String!,
        $content : String!,
        $slug : String!,
        $id : ID!

    ) {
        createPost(data: {title: $title, content: $content, slug: $slug , author: {connect: {id: $id}}}) {
            id
        }
    }

`
const CREATE_NEW_AUTHOR = gql`
    mutation postSigninInfo (
        $username : String!, 
        $name : String!, 
        $field : String!, 
        $description : String!, 
    ) {
        createAuthor(
            data: {username: $username, name: $name, field: $field, slug: $username, description: $description}
        ) {
            username
            id
            name
            slug
            avatar {
                url
            }
        }
    }
`
const PUBLISH_AUTHOR = gql`
    mutation publishAuthor ($id : ID!) {
        publishAuthor(where: {id: $id}) {
            slug
        }
    }

`

export { CREATE_COMMENT , CREATE_POST , CREATE_NEW_AUTHOR , PUBLISH_AUTHOR }