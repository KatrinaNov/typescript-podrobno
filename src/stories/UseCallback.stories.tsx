import React, {useCallback, useMemo, useState} from 'react';

export default {
  title: 'useCallback'
}

type BookSecretPropsType = {
  books: Array<string>,
  addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
  console.log('BooksSecret')
  return <div>
    <button onClick={props.addBook}>Add book</button>
    {props.books.map((book, i) => <div key={i}>{book}</div>)}
  </div>
}

const Books = React.memo(BooksSecret)

export const LikeUseCallback = () => {
  console.log('LikeUseCallback')
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(['React', 'JS', 'HTML'])

  const newArray = useMemo(() => {
    return books.filter(u => u.toLowerCase())
  }, [books]);

  const addBook = () => {
    const newBook = [...books, 'Angular' + new Date().getTime()]
    setBooks(newBook)
  }

  // принимает коллбэк, который возвращает коллбэк.
  const memoizedAddBook = useMemo(() => {
    return () => {
      const newBook = [...books, 'Angular' + new Date().getTime()]
      setBooks(newBook)
    }
  }, [books])


  // вызываем сам коллбэк
  const memoizedAddBook2 = useCallback(() => {
      const newBook = [...books, 'Angular' + new Date().getTime()]
      setBooks(newBook)
    }, [books])


  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <Books books={newArray} addBook={memoizedAddBook2}/>
  </>
}

