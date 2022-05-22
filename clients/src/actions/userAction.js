import axios from '../config/axios'
import swal from 'sweetalert'

export const setUser=(user)=>{
    return{type:'SET_USER',payload:user}
}

export const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}

export const startLoginUser=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/users/login',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('error')){
                // alert(response.data.error)
                swal(`${response.data.errors}`,"","error")
            }
            else{
                // alert('successfully logged in')
                swal("Successfully Logged In!","","success")
                console.log("user deatilaaas",response.data)
          localStorage.setItem('authToken',response.data.token)
          console.log("token",response.data.token)
          dispatch(setUser(response.data.user))
          redirect()
            }
        })
    }
}


// export const startGetUser=()=>{
//     return(dispatch)=>{
//         axios.get('/users/account',{
//             headers:{
//                 'x-auth':localStorage.getItem('authToken')
//             }
//         })
//         .then((response)=>{
//             const user=response.data
//             dispatch(setUser(user))
//         })
//         .catch((err)=>{
//             alert(err)
//         })
//     }
// }

export const startRegisterUser=(formData,redirect)=>{
    return(dispatch=>{
       axios.post('/users/register',formData)
       .then((response)=>{
           console.log("user details after refister",response.data)
        if(response.data.errors){
            swal(`${response.data.message}`,"","error")
        }
        else{
            swal("Successfully Registered!","", "success")
            redirect()
            dispatch(setUser(response.data.user))
           
        }
       })
    })
}

export const startUserLogout=()=>{
    return(dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.notice){
                alert(response.data.notice,'logout')
            }else{
                localStorage.clear()
                dispatch(removeUser({}))
                window.location.href="/"
            }
        })
    }
}




