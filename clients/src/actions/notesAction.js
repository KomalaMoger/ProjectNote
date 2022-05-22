import axios from '../config/axios'

import swal from 'sweetalert'

// GET NOTES
export const setNotes=(notes)=>{
    return {type:'SET_NOTES',payload:notes}
}

export const startSetNotes=()=>{
    return(dispatch)=>{
        axios.get('/notes',{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
            const notes=response.data
            dispatch(setNotes(notes))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

// POST
export const addNote = (note) => {
    return { type: 'ADD_NOTE', payload: note }
}

export const StartAddNote = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/notes', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                if(response.data.errors){
                    swal(`${response.data.message}`,"","error")
                }
                else{
                    const note = response.data
                    console.log(response.data)
                    dispatch(addNote(note))
                    // redirect()
                    window.location.href="/notes"
                }
            })
    }
}


// // UPDATE NOTES

export const updatenote = (note) => {
    return { type: 'UPDATE_NOTE', payload: note  }
}

export const StartUpdateNote = (formData, id) => {
    return (dispatch) => {
        axios.put(`/notes/${id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                if (response.data.errors) {
                    swal(`${response.data.message}`,"","error")
                }
                else{
                console.log('note details', response.data)
                const note = response.data
                dispatch(updatenote(note)) 
                window.location.href="/notes"
                }
            })
    }
}



// DELETE NOTES

export const removeNote=(id)=>{
    return{type:'REMOVE_NOTE',payload:id}
}

export const startRemoveNote=(id)=>{
    return(dispatch)=>{
        axios.delete(`/notes/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
            const note=response.data
            dispatch(removeNote(note._id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}



