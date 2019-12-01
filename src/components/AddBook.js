import React, {useState} from 'react';
import { useQuery, useMutation} from '@apollo/react-hooks';
import { GET_AUTHORS_QUERY, ADD_BOOK, GET_BOOKS_QUERY } from '../queries/queries'



const AddBook = () => {
    const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
    const [addBook, { data:input }] = useMutation(ADD_BOOK);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    
    const authorsOptions = () => {
        if(loading)
            return (<option >Loading..</option>)
        else if(error) 
            return (<option >Error..</option>)
        else
            return data.authors.map(author => (<option key={author.id} value={author.id}>{author.name}</option>))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            genre,
            authorId
        }
        addBook({ variables: {...data}, refetchQueries:[{query: GET_BOOKS_QUERY}] })
        console.log(data);
    }
    
    return (
        <form action="" onSubmit={onSubmit}>
            <div>
                <label>Book Name:</label><input type="text" name="" id="" onChange={e => (setName(e.target.value))} />
            </div>
            <div>
                <label>Genre:</label><input type="text" name="" id="" onChange={e => (setGenre(e.target.value))}/>
            </div>
            <select onChange={e => (setAuthorId(e.target.value))}>
                <option>Select Author</option>
                {authorsOptions()}
            </select>
            <div>
                <button type="submit">+</button>
            </div>
        </form>
    );
}

export default AddBook;