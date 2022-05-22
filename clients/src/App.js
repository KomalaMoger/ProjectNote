import './App.css';
import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './components/statics/home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Account from './components/auth/Account'
import { connect } from 'react-redux'
import { startUserLogout } from './actions/userAction'

import Categorieslist from './components/categories/list'
import AddCategory from './components/categories/new'
import CategoryEdit from './components/categories/edit'
import CategoryShow from './components/categories/show'

import NoteList from './components/notes/list'
import NoteNew from './components/notes/new'
import NotesEdit from './components/notes/edit'
import NoteShow from './components/notes/show'

function App(props) {
  const handleLogout = () => {
    props.dispatch(startUserLogout())
}
  return (
    <BrowserRouter>
      <div className='top'>
        <ul className='topList'>
        <li className='topListItem'><Link to='/' className='link' >HOME</Link></li>
                {
                  Object.keys(props.user).length !== 0 ?  (
                        <div>
                          <li className='topListItem'><Link to="/users/account" className='link'>ACCOUNT</Link></li>
                           <li className='topListItem'><Link to='/categories' className='link'>CATEGORIES</Link></li>
                           <li className='topListItem'><Link to='/notes' className='link'>NOTES</Link></li>
                            <li className='topListItem'><Link to="#" className='link' onClick={handleLogout}>LOGOUT</Link></li> 
                        </div>
                    ) : (
                            <div>
                                <li className='topListItem'><Link to="/users/register" className='link'>REGISTER</Link></li>
                                <li className='topListItem'><Link to="/users/login" className='link'>LOGIN</Link></li> 
                        
                            </div>
                        )
                }
                </ul>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path="/users/register" component={Register} />
          <Route path="/users/login" component={Login} /> 
          <Route path="/users/account" component={Account}/>

          <Route path='/categories' exact={true} component={Categorieslist} />
          <Route path='/categories/new' component={AddCategory} />
          <Route path='/categories/edit/:id' component={CategoryEdit} exact={true} />
          <Route path='/categories/:id' component={CategoryShow} />

          <Route path='/notes' exact={true} component={NoteList}/>
          <Route path='/notes/new' component={NoteNew}/>
          <Route path='/notes/edit/:id' component={NotesEdit} exact={true} />
          <Route path='/notes/:id' component={NoteShow}/>
          
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}
export default connect(mapStateToProps)(App)
