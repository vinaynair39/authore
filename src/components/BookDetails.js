import React from 'react';
import { useQuery, } from '@apollo/react-hooks';
import { GET_BOOK } from '../queries/queries'


const BookDetails = (props) => {
    const { loading, error, data } = useQuery(GET_BOOK,{
        variables: { id: props.bookId },
    }); 
    if (loading) return <p>Loading...</p>;
    if (error) return '';
    return (
        <div>
            <h1>{data.book.name}</h1>
            <h3>{data.book.genre}</h3>
            <h3>{data.book.author.name}</h3>
            <p>All books by the author</p>
            <ul>
                {data.book.author.books.map(book => {
                    return <li>{book.name}</li>
                })}
            </ul>
        </div>
    );
}

export default BookDetails;