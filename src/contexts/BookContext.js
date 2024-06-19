import React, {createContext, useState} from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'name of the country', id: 2},
        {title: 'name of the baker', id: 3},
        {title: 'name of the waiter', id: 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;