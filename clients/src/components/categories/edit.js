import React from 'react'
import CategoryForm from './form'
import { startUpdateCategory } from '../../actions/categoriesAction'
import { connect } from 'react-redux'
function CategoryEdit(props) {
    const handleSubmit = (formData) => {
        const id = props.match.params.id
        const redirect = () => props.histroy.push('/category')
        props.dispatch(startUpdateCategory(formData, id, redirect))
    }
    return (
        <CategoryForm handleSubmit={handleSubmit} />
    )
}
export default connect()(CategoryEdit)