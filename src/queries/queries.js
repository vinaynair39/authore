
import { gql } from 'apollo-boost';

export const GET_BOOKS_QUERY = gql`
{
    books{
        name
        id
    }
}
`


export const GET_AUTHORS_QUERY = gql`
{
    authors{
        name
        id
    }
}
`

export const ADD_BOOK = gql`
mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
    addBook(name:$name, genre:$genre, authorId:$authorId){
        name,
        id,
        authorId
    }
}
`


export const GET_BOOK = gql`
query GetBook($id: ID!){
    book(id:$id){
        name,
        genre
        author{
            name,
            books{
                name
            }
        }
    }
}
`