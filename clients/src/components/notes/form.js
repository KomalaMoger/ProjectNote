import React from 'react'
import { connect } from 'react-redux'
import { StartAddNote } from '../../actions/notesAction'
import { withRouter } from 'react-router-dom'
import './form.css'

class NoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.notes ? this.props.notes.title : '',
            description : this.props.notes ? this.props.notes.description : '',
            category: this.props.notes ? this.props.notes.category.name : ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // const id=this.props.notes._id
        e.preventDefault()
        const formData = {
            title: this.state.title,
            description : this.state.description ,
            category: this.state.category
        }
        this.props.handleSubmit(formData)
    }
    render() {
        return (
            <div className='formPage'>

                <img className="formPageImg" src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?cs=srgb&dl=pexels-min-an-694740.jpg&fm=jpg" alt="" />

                <form className='Form' onSubmit={this.handleSubmit}>
                    <div className="FormGroup">
                        <label htmlFor="fileInput"><i className="formIcon fas fa-plus"></i></label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                        <input type='text' name='title' value={this.state.title} placeholder='Title' className='formInput' onChange={this.handleChange} autoFocus={true} />
                    </div>

                    <div className="FormGroup">
                        <textarea type='text' name='description' placeholder='Description' className='formInput formText' value={this.state.description } onChange={this.handleChange}></textarea>
                    </div>

                    <select id="category" value={this.state.category} className="form-control" name="category" onChange={this.handleChange}>
                        <option key="one">select category</option>
                        {
                            this.props.categories ? this.props.categories.map(category => {
                                return (<option value={category._id} key={category._id}>{category.name}</option>)
                            }) : 'loading'
                        }
                    </select>
                    
                    <input type='submit' className="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        categories: state.categories,
        notes: state.notes.find(note => note._id == id)

    }
}

export default withRouter(connect(mapStateToProps)(NoteForm))