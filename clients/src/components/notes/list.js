import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveNote, startSetNotes } from '../../actions/notesAction'
import './list.css'
function NoteList(props) {
    console.log('notes props', props)
    const handleRemove = (id) => {
        const confirmRemove = window.confirm('are you sure?')
        if (confirmRemove) {
            props.dispatch(startRemoveNote(id))
        }
    }
    console.log("notes props", props)
    if (props.notes.length == 0) {
        props.dispatch(startSetNotes())
    }
    return (
        <div className='container'>
            <div className='topDetails'>
                <span className='noteLength'>Listing notes length-{props.notes.length}</span>
                <Link to='/notes/new'><button className='addButton'>Add Notes</button></Link></div>
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Remove</th>

                    </tr>
                </thead>
                <tbody>
                    {props.notes.map((note) => {
                        return (<tr key={note._id}>
                            <td className='noteName'><Link to={`/notes/${note._id}`}>{note.title}</Link></td>
                            <td><Link to={`/notes/edit/${note._id}`}><i className="singleEditIcon far fa-edit"></i></Link></td>
                            <td onClick={() => { handleRemove(note._id) }}><i className="singlePostIcon far fa-trash-alt"></i></td>
                        </tr>)

                    })}
                </tbody>
            </table>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps)(NoteList)