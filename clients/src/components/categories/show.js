import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { findCategories } from '../../selectors/categoriesSelector'
import './show.css'
function CategoryShow(props) {
    console.log(props)
    const { _id, name } = props.category || {}
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="box-shadow">
                        <div className="service-box">
                            <h1>Category Page</h1>
                            <div className="service-icon yellow">
                                <div className="front-content">
                                    {
                                        props.category ? (
                                            <div>
                                                <h3>Category Name-{name}</h3>
                                                <span><Link to='/categories'>back</Link></span>
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
const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        category: findCategories(state.categories, id)
    }
}
export default connect(mapStateToProps)(CategoryShow)