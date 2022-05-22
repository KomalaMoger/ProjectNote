import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {findNotes} from '../../selectors/notesSelector'
import './show.css'
function NoteShow(props){
console.log(props)
return (
    <div>
        <div className="container">
            <div className="row">
                <div className="box-shadow">
                    <div className="service-box">
                        <h1>Note Page</h1>
                        <div className="service-icon yellow">
                            <div className="front-content">
                                {
                                    props.note ? (
                                        <div>
                                            <h3>Note Title-{props.note.title}</h3>
                                            <h3>Note description-{props.note.description}</h3>
                                            <h3>Note Category-{props.note.category.name}</h3>
                                            <span><Link to='/notes'>back</Link></span>
                                        </div>
                                    ) : (
                                        <div>loading...</div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        note:findNotes(state.notes,id)
    }
}
export default connect(mapStateToProps)(NoteShow)
