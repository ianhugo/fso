import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App(props) {
  const [count, setCount] = useState(0)

  // const { notes } = props
  const [notes, setNotes] = useState(props.notes)

  const [newNote, setNewNote] = useState(" ")
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.6,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important == true)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // <div>
    //   <p>
    //     Hello World, {props.name}
    //   </p>
    // </div>
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {/* <li> {notes[0].content} </li>
        <li> {notes[1].content} </li>
        <li> {notes[2].content} </li> */}
        <ul>
          {notesToShow.map(note => <li key={note.id}>{note.content}</li>)}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
