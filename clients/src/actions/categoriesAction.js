import axios from '../config/axios'
// GET CATRGORIES
export const setCategories = (categories) => {
    return { type: 'SET_CATEGORIES', payload: categories }
}
export const startSetCategories = () => {
    return (dispatch) => {
        axios.get('/categories')
            .then((response) => {
                console.log("get categories",response.data)
                const categories = response.data
                dispatch(setCategories(categories))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


// POST CATEGORY
export const addCategory = (category) => {
    return { type: 'ADD_CATEGORY', payload: category }
}
export const startAddCategory = (formData) => {
    return (dispatch) => {
        axios.post('/categories', formData)
            .then((response) => {
                const category = response.data
                dispatch(addCategory(category))
                window.location.href = "/categories"
            })
    }
}


// UPDATE CATEGORY
export const updateCategory = (category) => {
    return { type: 'UPDATE_CATEGORY', payload: category }
}
export const startUpdateCategory = (formData, id) => {
    return (dispatch) => {
        axios.put(`/categories/${id}`, formData)
            .then((response) => {
                const category = response.data
                dispatch(updateCategory(category))
                window.location.href = "/categories"
            })
    }
}


// DELETE CATEGORY
export const removeCategory = (id) => {
    return { type: 'REMOVE_CATEGORY', payload: id }
}
export const startRemoveCategory = (id) => {
    return (dispatch) => {
        axios.delete(`/categories/${id}`)
            .then((response) => {
                console.log(response)
                const categories = response.data
                dispatch(removeCategory(categories._id))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}