import React from 'react'
import { connect } from 'react-redux'
import './Account.css'
function Account(props) {
    console.log('account', props)
    return (
        <div className='account'>
                     <div className="container-main">
  <div>
  <h3>User Account</h3>
            <h2>Username-{props.user.username}</h2>
            <h2>Email-{props.user.email}</h2>
  </div>
</div>

       

   
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Account)