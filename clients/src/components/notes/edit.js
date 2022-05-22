import React from 'react'
import NoteForm from './form'
import { StartUpdateNote } from '../../actions/notesAction'
import { connect } from 'react-redux'

function NotesEdit(props) {
    const handleSubmit = (formData) => {
        const id = props.match.params.id
        const redirect = () => {
            props.history.push('/notes')
        }
        props.dispatch(StartUpdateNote(formData, id, redirect))
    }
    return (
        <div>
            <NoteForm handleSubmit={handleSubmit} />
        </div>
    )
}

export default connect()(NotesEdit)