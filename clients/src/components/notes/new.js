import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './form'
import { StartAddNote } from '../../actions/notesAction'
function NoteNew(props) {
    const handleSubmit = (formData) => {
        const redirect = () => props.history.push('/notes')
        props.dispatch(StartAddNote(formData, redirect))
    }
    return <div>
        < NoteForm handleSubmit={handleSubmit} />
    </div>
}
export default connect()(NoteNew)