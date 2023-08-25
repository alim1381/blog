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

export { CREATE_COMMENT , CREATE_POST }