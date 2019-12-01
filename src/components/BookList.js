import React, {useState} from 'react';
import {useQuery } from '@apollo/react-hooks';
import {GET_BOOKS_QUERY} from '../queries/queries';
import BookDetails from '../components/BookDetails'


const BookList = () => {
    const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
    const [selected, setSelected] = useState('')
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return(
        <div>
            {console.log(data.books)}
            <ul id="booklist">
                <li>Book Name</li>
                {data.books.map(book => {
                    return <li onClick={e => (setSelected(book.id))} key={book.id}>{book.name}</li>
                })}
            </ul>
            <BookDetails bookId={selected}/>
        </div>
    );
}

export default BookList;