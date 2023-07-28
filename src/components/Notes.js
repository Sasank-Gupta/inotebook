import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, addNote } = context
    return (
        <>
        <AddNote/>
        <div className="container my-3">
            <h2>Your Note</h2>
            {notes.map((note) => {
                return (
                    <div className="col-md-4">
                        <NoteItem key={note._id} note={note} />
                    </div>
                    )
                })}

        </div>
                </>
    )
}




export default Notes



