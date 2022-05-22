import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveCategory,startSetCategories } from '../../actions/categoriesAction'
import './list.css'
function Categorieslist(props) {
    console.log('categories props', props)
    const handleRemove = (id) => {
        const confirmRemove = window.confirm('are you sure?')
        if (confirmRemove) {
            props.dispatch(startRemoveCategory(id))
        }
    }
    console.log("categories props", props)
    if (props.categories.length == 0) {
        // console.log("insode if")
        props.dispatch(startSetCategories())
    }
    return (
        <div className='container'>
            <div className='topDetails'>
                <span className='categoryLength'>Listing categories length-{props.categories.length}</span>
                <Link to='/categories/new'><button className='addButton'>Add Category</button></Link></div>
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Remove</th>

                    </tr>
                </thead>
                <tbody>
                    {props.categories.map((category) => {
                        return (<tr key={category._id}>
                            <td className='categoryName'><Link to={`/categories/${category._id}`}>{category.name}</Link></td>
                            <td><Link to={`/categories/edit/${category._id}`}><i className="singleEditIcon far fa-edit"></i></Link></td>
                            <td onClick={() => { handleRemove(category._id) }}><i className="singlePostIcon far fa-trash-alt"></i></td>
                        </tr>)
                    })}
                </tbody>
            </table>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps)(Categorieslist)
