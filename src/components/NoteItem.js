import React from 'react'

const NoteItem = (props) => {
    const { note } = props
    return (
        <div>
            {note.title}
            {note.description}
            <div className="container">

            <div className="card"style={{width: "18 rem;"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NoteItem
