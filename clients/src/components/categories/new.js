import React from 'react'
import { connect } from 'react-redux'
import CategoryForm from './form'
import { startAddCategory } from '../../actions/categoriesAction'
function AddCategory(props) {
    const handleSubmit = (formData) => {
        const redirect = () => props.history.push('/categories')
        props.dispatch(startAddCategory(formData, redirect))
    }
    return <div>
        < CategoryForm handleSubmit={handleSubmit} />
    </div>
}
export default connect()(AddCategory)