import { useState } from "react"


export default function Bookshelf() {

    const [books, setBooks] = useState([
        { title: 'A Little Life', author: 'Hanya Yanagihara' },
        { title: 'Homeland', author: 'R.A. Salvatore'}
    ])

    const [newBook, setNewBook] = useState([
        { title: '', author: ''}
    ])

    const handleInputChange = (e) => {
        setNewBook({...newBook, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newBook) 
        setBooks ({...books, [e.target.id] : e.target.value})
        setNewBook({ title: '', author: '' })
    }
    return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title"
                    onChange={handleInputChange}
                    value={books.title} />
            <label htmlFor="author">Author</label>
            <input type="text" id="author"
                    onChange={handleInputChange}
                    value={books.author}/>
                    <button type="submit">submit</button>
        </form>
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
    )
}
