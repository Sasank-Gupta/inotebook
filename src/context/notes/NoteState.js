// eslint-disable-next-line
import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const notesInitial = [{
    "_id": "64b37ef398114f738a99e231",
    "title": "My title",
    "description": "Please wake early",
    "tag": "Personal",
    "date": "2023-07-16T05:24:03.546Z",
    "__v": 0
  },
  {
    "_id": "64b37ef498114f738a99e233",
    "title": "My title",
    "description": "Please wake early",
    "tag": "Personal",
    "date": "2023-07-16T05:24:04.725Z",
    "__v": 0
  },
  {
    "_id": "64b37ef598114f738a99e235",
    "title": "My title",
    "description": "Please wake early",
    "tag": "Personal",
    "date": "2023-07-16T05:24:05.703Z",
    "__v": 0
  },
  {
    "_id": "64b37f2498114f738a99e237",
    "title": "My title",
    "description": "Please wake early",
    "tag": "Personal",
    "date": "2023-07-16T05:24:52.537Z",
    "__v": 0
  }
  ]
  const [notes, setNotes] = useState(notesInitial)


  //Add a Note
  const addNote = (title, description, tag) => {
    let note = {
      "_id": "64b37f2498114f738a99e237",
      "title": "My titleAdded",
      "description": "Please wake early[Added]",
      "tag": "Personal",
      "date": "2023-07-16T05:24:52.537Z",
      "__v": 0
    }
    setNotes(notes.push(note))
  }
  //Delete a Note
  const deleteNote = () => {

  }
  //Edit a Note
  const editNote = () => {

  }




  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState
