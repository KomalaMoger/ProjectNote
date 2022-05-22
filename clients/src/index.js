import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startSetCategories } from './actions/categoriesAction'
import { startSetNotes } from './actions/notesAction'
import { setUser } from './actions/userAction'
import axios from './config/axios'

const store = configureStore()
store.subscribe(() => {
    console.log("state value",store.getState())
})
console.log("from storeS",store.getState())

//handle page reloads
if(localStorage.getItem('authToken')) {
  axios.get('/users/account',{
      headers:{
          'x-auth': localStorage.getItem('authToken')
      }
  })
  .then(response=>{
      const user = response.data
      console.log("account details",user)
      store.dispatch(setUser(user))
      store.dispatch(startSetCategories())
    store.dispatch(startSetNotes())
  })
}


const jsx = (<Provider store={store}>
    <App />
</Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))


