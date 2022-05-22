import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { findCategories } from '../../selectors/categoriesSelector'
import './form.css'
class CategoryForm extends React.Component {
    constructor(props) {
        console.log('form props', props)
        super(props)
        this.state = {
            name: props.category ? props.category.name : '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
        }
        this.props.handleSubmit(formData)
        console.log(formData, 'formdata')
    }
    render() {
        return (
            <div className='formPage' >

                <img className="formPageImg" src="https://images.pexels.com/photos/8947770/pexels-photo-8947770.jpeg?cs=srgb&dl=pexels-karolina-grabowska-8947770.jpg&fm=jpg" alt="" />

                <form className='Form' onSubmit={this.handleSubmit}>
                    <div className="FormGroup">

                        <label htmlFor="fileInput"><i className="formIcon fas fa-plus"></i></label>

                        <input type="file" id='fileInput' style={{ display: 'none' }} />

                        <input type='text' value={this.state.name} placeholder='Enter the category name' className='formInput'
                            name="name" onChange={this.handleChange} autoFocus={true} />
                    </div>

                    <input type='submit' className="Submit" />
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
  console.log("category in form page",state.categories)
    const id = props.match.params.id
    return {
        category: findCategories(state.categories, id)
    }
}
export default withRouter(connect(mapStateToProps)(CategoryForm))


